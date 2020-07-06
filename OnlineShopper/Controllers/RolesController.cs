using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace OnlineShopper.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly RoleManager<IdentityRole> role;

        public RolesController(RoleManager<IdentityRole> role)=>
            this.role = role;
        

        [HttpGet]
        public ActionResult GetRoles()=>
             Ok(this.role.Roles.ToList());
    }
}