namespace GoFurnish.Api.Models
{
    public class PaymentDetail
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public string Provider { get; set; }
        public string TransactionId { get; set; }
        public string PaymentStatus { get; set; }
        public string RawResponse { get; set; }  // stored JSON response
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
    }
}