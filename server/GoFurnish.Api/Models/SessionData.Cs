namespace GoFurnish.Api.Models
{
    public class SessionData
    {
        public string Sid { get; set; }
        public string Sess { get; set; }  // stored JSON string of session data
        public DateTime Expire { get; set; }
    }
}