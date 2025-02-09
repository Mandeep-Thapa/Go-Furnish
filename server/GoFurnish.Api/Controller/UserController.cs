using GoFurnish.Api.DTOs;
using GoFurnish.Api.Models;
using GoFurnish.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GoFurnish.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ITokenService _tokenService;
        // In a real project, inject a repository or user manager as well.

        public UsersController(ITokenService tokenService)
        {
            _tokenService = tokenService;
        }

        // POST: api/users/register
        [HttpPost("register")]
        public IActionResult Register(UserRegisterDto dto)
        {
            // TODO: Insert user creation logic here.
            // For demonstration, we return a dummy user.
            var user = new User
            {
                Id = 1,
                Email = dto.Email,
                PwHash = "dummyHash",
                PwSalt = "dummySalt",
                Role = "customer",
                Created = DateTime.UtcNow,
                Modified = DateTime.UtcNow
            };

            return Ok(user);
        }

        // POST: api/users/login
        [HttpPost("login")]
        public IActionResult Login(UserLoginDto dto)
        {
            // TODO: Validate credentials & fetch user from DB.
            // For demonstration, we create a dummy user.
            var user = new User
            {
                Id = 1,
                Email = dto.Email,
                Role = "customer",
                Created = DateTime.UtcNow,
                Modified = DateTime.UtcNow
            };

            var token = _tokenService.GenerateToken(user);
            return Ok(new { Token = token });
        }

        // GET: api/users/profile
        [HttpGet("profile")]
        [Authorize(Roles = "customer,admin")]
        public IActionResult Profile()
        {
            var email = User.Identity?.Name;
            return Ok(new { Email = email, Message = "User profile data" });
        }
    }
}