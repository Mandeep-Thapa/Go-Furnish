namespace GoFurnish.Api.Models
{
    public class ProductPhoto
    {
        public int PhotoId { get; set; }
        public int ProductId { get; set; }
        public string PhotoUrl { get; set; }
        public string AltText { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
    }
}