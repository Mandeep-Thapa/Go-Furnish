using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GoFurnish.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        // GET: api/orders
        [HttpGet]
        [Authorize]
        public IActionResult GetOrders()
        {
            // TODO: Query orders for the authenticated user.
            return Ok(new[] { "Order 1", "Order 2" });
        }

        // GET: api/orders/{id}
        [HttpGet("{id}")]
        [Authorize]
        public IActionResult GetOrder(int id)
        {
            // TODO: Query a specific order.
            return Ok(new { Id = id, Status = "pending", AmountCharged = 199.99 });
        }

        // POST: api/orders
        [HttpPost]
        [Authorize]
        public IActionResult CreateOrder([FromBody] object orderDto)
        {
            // TODO: Create an order in the DB.
            return CreatedAtAction(nameof(GetOrder), new { id = 1 }, orderDto);
        }
    }
}