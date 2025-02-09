namespace GoFurnish.Api.Models
{
    public class Review
    {
        public int ReviewId { get; set; }
        public int ProductId { get; set; }
        public int UserId { get; set; }
        public int Rating { get; set; } // e.g. 1 to 5
        public string ReviewText { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
    }
}