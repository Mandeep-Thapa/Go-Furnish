namespace GoFurnish.Api.Models
{
    public class Inventory
    {
        public int InventoryId { get; set; }
        public int ProductId { get; set; }
        public int? OrderId { get; set; }
        public string TransactionType { get; set; }  // "sale", "return", "cancellation", "adjustment"
        public int StockChange { get; set; }
        public int? UserId { get; set; } // Admin who made changes
        public string Comment { get; set; }
        public DateTime ChangedAt { get; set; }
    }
}