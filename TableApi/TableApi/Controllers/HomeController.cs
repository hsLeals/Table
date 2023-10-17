using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using TableApi.Models;

namespace TableApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly APIContext _sql;
        private IEnumerable<ClaimsIdentity> claimsIdentity;

        public HomeController(APIContext sql)
        {
            _sql = sql;
        }
        public List<User> Get()
        {
            return _sql.Users.ToList();
        }
        [HttpGet("{id}")]
        public User Get(int id)
        {
            return _sql.Users.SingleOrDefault(x=>x.UserId == id);
        }
        [HttpGet("search/{name}")]
        public List<User> Get(string name)
        {
            return _sql.Users.Where(x => x.UserName.Contains(name)).ToList();
        }
        [HttpPost]
        public User post(User user)
        {
            _sql.Users.Add(user);
            _sql.SaveChanges();
            return user;
        }
        [HttpDelete("{id}")]
        public void delete(int id)
        {
            _sql.Users.Remove(_sql.Users.SingleOrDefault(x=>x.UserId ==id));
            _sql.SaveChanges();
        }
        [HttpPut("{id}")]
        public User put(int id, User user) 
        {
            User old = _sql.Users.SingleOrDefault(x => x.UserId == id);
            old.UserName = user.UserName;
            old.UserSurname = user.UserSurname;
            old.UserSalary = user.UserSalary;
            _sql.SaveChanges();
            return old;

        }
    }
}
