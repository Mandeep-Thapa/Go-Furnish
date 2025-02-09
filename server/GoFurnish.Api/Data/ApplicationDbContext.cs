using GoFurnish.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace GoFurnish.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Server tables from our earlier discussion.
        public DbSet<User> Users { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductPhoto> ProductPhotos { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<ShippingMethod> ShippingMethods { get; set; }
        public DbSet<Promotion> Promotions { get; set; }
        public DbSet<SessionData> Sessions { get; set; }
        public DbSet<PaymentMethod> PaymentMethods { get; set; }
        public DbSet<PaymentDetail> PaymentDetails { get; set; }
        public DbSet<Inventory> Inventories { get; set; }
        public DbSet<InventoryErrorLog> InventoryErrorLogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Configure relationships, indexes, and constraints here.
        }
    }
}