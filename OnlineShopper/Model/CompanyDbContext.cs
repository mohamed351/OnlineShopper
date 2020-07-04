using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopper.Model
{
    public class CompanyDbContext:IdentityDbContext<ApplicationUser>
    {
        public CompanyDbContext(DbContextOptions<CompanyDbContext> options)
            : base(options)
        {

        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }


        public static async Task CreateDefaultAccounts(IServiceProvider service, Microsoft.Extensions.Configuration.IConfiguration configuration)
        {

            RoleManager<IdentityRole> role = service.GetRequiredService<RoleManager<IdentityRole>>();
            var result = role.Roles.FirstOrDefault(a => a.Name == "Admin");
            if(result == null)
            {
                await role.CreateAsync(new IdentityRole("Admin"));
                
            }
             result = role.Roles.FirstOrDefault(a => a.Name == "Customer");
            if (result == null)
            {
                await role.CreateAsync(new IdentityRole("Customer"));
            }

        }

    }
}
