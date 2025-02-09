namespace GoFurnish.Api.Models
{
    public class Promotion
    {
        public int PromotionId { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public int DiscountPercent { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
    }
}