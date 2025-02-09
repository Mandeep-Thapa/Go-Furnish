namespace GoFurnish.Api.Models
{
    public class PaymentMethod
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Configuration { get; set; }  // JSON configuration
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
    }
}