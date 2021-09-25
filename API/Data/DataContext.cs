using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){ }
        public DbSet<Usuario> usuarios {  get; set; }

        public DbSet<Jogo> jogos {  get; set; }

        public DbSet<PerfilMoba> perfils {  get; set; }

    }
}