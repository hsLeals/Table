using System;
using System.Collections.Generic;

#nullable disable

namespace TableApi.Models
{
    public partial class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserSurname { get; set; }
        public string UserJob { get; set; }
        public string UserCountry { get; set; }
        public int? UserSalary { get; set; }
    }
}
