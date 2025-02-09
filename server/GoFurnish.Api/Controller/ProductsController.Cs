using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GoFurnish.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        // GET: api/products
        [HttpGet]
        public IActionResult GetProducts()
        {
            // TODO: Query products from the DB.
            return Ok(new[] { "Product A", "Product B" });
        }

        // GET: api/products/{id}
        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            // TODO: Query a specific product.
            return Ok(new { Id = id, Name = "Product A", Price = 9.99, StockQuantity = 100 });
        }

        // POST: api/products
        [HttpPost]
        [Authorize(Roles = "admin")]
        public IActionResult CreateProduct([FromBody] object productDto)
        {
            // TODO: Save the product to the DB.
            return CreatedAtAction(nameof(GetProduct), new { id = 1 }, productDto);
        }
    }
}