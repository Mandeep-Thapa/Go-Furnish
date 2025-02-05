using Microsoft.Extensions.DependencyInjection;

namespace Backend
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options => {
                options.AddPolicy("EcommercePolicy", builder => {
                    builder.WithOrigins(Environment.GetEnvironmentVariable("CLIENT_URL"))
                           .AllowAnyHeader()
                           .AllowAnyMethod()
                           .AllowCredentials();
                });
            });
        }
    }
} 