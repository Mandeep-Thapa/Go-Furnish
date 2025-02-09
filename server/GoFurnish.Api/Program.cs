using GoFurnish.Api.Data;
using GoFurnish.Api.Middlewares;
using GoFurnish.Api.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add Swagger generation with JWT support.
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Go-Furnish API", Version = "v1" });
    var jwtSecurityScheme = new OpenApiSecurityScheme
    {
        BearerFormat = "JWT",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = JwtBearerDefaults.AuthenticationScheme,
        Description = "Enter your JWT token below",
        Reference = new OpenApiReference
        {
            Id = JwtBearerDefaults.AuthenticationScheme,
            Type = ReferenceType.SecurityScheme
        }
    };
    c.AddSecurityDefinition(jwtSecurityScheme.Reference.Id, jwtSecurityScheme);
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        { jwtSecurityScheme, Array.Empty<string>() }
    });
});

// Configure PostgreSQL DB Connection using EF Core.
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configure JWT Authentication.
var jwtSettings = builder.Configuration.GetSection("JwtSettings");
var key = Encoding.ASCII.GetBytes(jwtSettings["Secret"]);
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings["Issuer"],
        ValidAudience = jwtSettings["Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(key)
    };
});

// Add a distributed memory cache to support session storage.
builder.Services.AddDistributedMemoryCache();

// Setup session for web pages.
builder.Services.AddSession(options =>
{
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

// Register custom services.
builder.Services.AddScoped<ITokenService, TokenService>();

var app = builder.Build();

// Global error handling middleware.
app.UseMiddleware<ErrorHandlingMiddleware>();

// Remove static file middleware as client folder is not used.
// If needed, you could re-enable this section after adding a client folder.
// string clientPath = Path.Combine(Directory.GetCurrentDirectory(), "client");
// if (!Directory.Exists(clientPath))
// {
//     Console.WriteLine($"WARNING: Static files folder not found: {clientPath}");
// }
// else
// {
//     var defaultFilesOptions = new DefaultFilesOptions
//     {
//         FileProvider = new PhysicalFileProvider(clientPath),
//         RequestPath = ""
//     };
//     defaultFilesOptions.DefaultFileNames.Clear();
//     defaultFilesOptions.DefaultFileNames.Add("index.html");
//     app.UseDefaultFiles(defaultFilesOptions);

//     app.UseStaticFiles(new StaticFileOptions
//     {
//         FileProvider = new PhysicalFileProvider(clientPath),
//         RequestPath = ""
//     });
// }

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseSwagger();
app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Go-Furnish API v1"));

app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseSession();

app.MapControllers();

// Add a fallback route for "/" so that the root returns a response.
app.MapGet("/", () => "Welcome to the GoFurnish API. Please use the /swagger endpoint for API documentation.");

app.Run();