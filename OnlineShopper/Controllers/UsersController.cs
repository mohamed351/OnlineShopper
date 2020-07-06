using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using OnlineShopper.Model;

namespace OnlineShopper.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _user;
      
        public UsersController(UserManager<ApplicationUser> user)
        {
            this._user = user;
        }
        
        /// <summary>
        /// Check Email is valid or not if is null return true else return false 
        /// </summary>
        /// <param name="email">The Email that you want to check </param>
        /// <returns>false if email exist else return true</returns>
        [HttpGet("CheckEmail/{email?}")]
        public async Task<ActionResult<bool>> CheckEmail([FromQuery]string email="")
          {
            if(email == null)
            {
                return Ok( new {result =false});
            }
            //get email information
            var checkEmail = await _user.FindByEmailAsync(email);
            //check if email is null or not 
           var result = checkEmail == null ? true : false;
            return Ok(new { result });
        }
        [HttpGet("CheckUserName/{userName?}")]
        public async Task<ActionResult> CheckUserName([FromQuery] string userName = "")
        {
            if(userName == null)
            {
                return Ok(new { result = false });
            }
            var checkUserName = await _user.FindByNameAsync(userName);

            var result = checkUserName == null ? true : false;
            return Ok(new { result });

        }


        
        
    }
}