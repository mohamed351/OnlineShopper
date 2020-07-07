using AutoMapper;
using OnlineShopper.Model;
using OnlineShopper.ViewModels.UserViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopper.Mapper
{
    public class UserMapping:Profile
    {

        public UserMapping()
        {
            this.CreateMap<ApplicationUser, SelectUserViewModel>()
                .ForMember(a => a.FirstName, a => a.MapFrom(a => a.FirstName))
                .ForMember(a => a.LastName, a => a.MapFrom(a => a.LastName))
                .ForMember(a => a.Phone, a => a.MapFrom(a => a.PhoneNumber))
                .ForMember(a => a.UserName, a => a.MapFrom(a => a.UserName))
                .ForMember(a => a.Id, a => a.MapFrom(a => a.Id));


        }
    }
}
