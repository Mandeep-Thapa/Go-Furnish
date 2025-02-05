using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Distributed;
using System;
using System.Threading.Tasks;
using System.IO;
using System.Text;

namespace Backend.Middleware
{
    public class RedisCacheMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IDistributedCache _redis;

        public RedisCacheMiddleware(RequestDelegate next, IDistributedCache redis)
        {
            _next = next;
            _redis = redis;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var cacheKey = context.Request.Path + context.Request.QueryString;
            try
            {
                var cachedResponse = await _redis.GetAsync(cacheKey);
                if (cachedResponse != null)
                {
                    context.Response.ContentType = "application/json";
                    await context.Response.Body.WriteAsync(cachedResponse);
                    return;
                }

                var originalBody = context.Response.Body;
                using var newBody = new MemoryStream();
                context.Response.Body = newBody;

                await _next(context);

                if (context.Response.StatusCode == 200 && 
                    context.Response.ContentType?.StartsWith("application/json") == true)
                {
                    newBody.Seek(0, SeekOrigin.Begin);
                    var responseBody = await new StreamReader(newBody).ReadToEndAsync();
                    await _redis.SetAsync(cacheKey, Encoding.UTF8.GetBytes(responseBody), new DistributedCacheEntryOptions
                    {
                        AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30)
                    });
                }

                newBody.Seek(0, SeekOrigin.Begin);
                await newBody.CopyToAsync(originalBody);
            }
            catch (Exception ex)
            {
                context.Response.OnStarting(async () => {
                    await _redis.RemoveAsync(cacheKey);
                });
                await _next(context);
            }
        }

        private async Task<string> FormatResponse(HttpResponse response)
        {
            response.Body.Seek(0, SeekOrigin.Begin);
            var text = await new StreamReader(response.Body).ReadToEndAsync();
            response.Body.Seek(0, SeekOrigin.Begin);
            return text;
        }
    }
} 