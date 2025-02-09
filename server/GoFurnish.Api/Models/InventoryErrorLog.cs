namespace GoFurnish.Api.Models
{
    public class InventoryErrorLog
    {
        public int LogId { get; set; }
        public int? ProductId { get; set; }
        public int? InventoryId { get; set; }
        public string ErrorMessage { get; set; }
        public DateTime LoggedAt { get; set; }
    }
}