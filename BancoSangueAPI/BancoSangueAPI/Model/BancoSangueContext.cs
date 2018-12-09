using BancoSangueAPI.Mappings;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Model
{
    public class BancoSangueContext : DbContext
    {

        public BancoSangueContext(DbContextOptions<BancoSangueContext> options) 
            : base(options)
        {

        }

        public DbSet<Endereco> Endereco { get; set; }
        public DbSet<Municipio> Municipio { get; set; }
        public DbSet<Estado> Estado { get; set; }

        public DbSet<Felipe> Felipe { get; set; }
        public DbSet<Norton> Norton { get; set; }
        public DbSet<Jose> Jose { get; set; }
        public DbSet<Luana> Luana { get; set; }
        public DbSet<Zils> Zils { get; set; }
        public DbSet<Matheus> Matheus { get; set; }
        public DbSet<Pedro> Pedro { get; set; }

        public DbSet<Veiculo> Veiculo { get; set; }
        public DbSet<Cor> Cor { get; set; }

        /// <summary>
        /// Classe Responsável por Relacionar o MAP com a sua Entidade
        /// </summary>
        /// <param name="modelBuilder"></param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new EnderecoMap());
            modelBuilder.ApplyConfiguration(new MunicipioMap());
            modelBuilder.ApplyConfiguration(new EstadoMap());

            modelBuilder.ApplyConfiguration(new FelipeMap());
            modelBuilder.ApplyConfiguration(new NortonMap());
            modelBuilder.ApplyConfiguration(new JoseMap());
            modelBuilder.ApplyConfiguration(new LuanaMap());
            modelBuilder.ApplyConfiguration(new ZilsMap());
            modelBuilder.ApplyConfiguration(new MatheusMap());
            modelBuilder.ApplyConfiguration(new PedroMap());

            modelBuilder.ApplyConfiguration(new VeiculoMap());
            modelBuilder.ApplyConfiguration(new CorMap());
        }
    }
}
