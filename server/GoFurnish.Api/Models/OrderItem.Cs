namespace GoFurnish.Api.Models
{
    public class OrderItem
    {
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal PriceAtPurchase { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
    }
}