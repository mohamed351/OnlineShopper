using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopper.ViewModels
{
    public class PagerViewModel
    {
        [Required]
        public int PageSize { get; set; }
        [Required]
        public int Start { get; set; }
    }
}
