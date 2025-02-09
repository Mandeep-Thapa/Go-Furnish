namespace GoFurnish.Api.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Status { get; set; }  // e.g. "pending", "completed"
        public int ShippingAddressId { get; set; }
        public int BillingAddressId { get; set; }
        public decimal AmountCharged { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
    }
}