using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using OnlineShopper.Model;

namespace OnlineShopper
{
    public class Program
    {
        public  static  void Main(string[] args)
        {
            var host = CreateHostBuilder(args)
                .Build();
              

            using (var scope = host.Services.CreateScope())
            {
                var serviceProvider = scope.ServiceProvider;
                var config = serviceProvider.GetRequiredService<IConfiguration>();

                 CompanyDbContext.CreateDefaultAccounts(serviceProvider, config).Wait();
            }

             host.RunAsync().Wait();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
