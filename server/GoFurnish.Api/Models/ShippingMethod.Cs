namespace GoFurnish.Api.Models
{
    public class ShippingMethod
    {
        public int ShippingMethodId { get; set; }
        public string Name { get; set; }
        public decimal Cost { get; set; }
        public int EstimatedDeliveryDays { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
    }
}