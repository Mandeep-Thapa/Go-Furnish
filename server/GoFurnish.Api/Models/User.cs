namespace GoFurnish.Api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string PwHash { get; set; }
        public string PwSalt { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }  // e.g. "customer", "admin"
        public int? PrimaryAddressId { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
    }
}