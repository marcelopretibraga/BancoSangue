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
        public DbSet<IntervaloDoacao> IntervaloDoacao { get; set; }
        public DbSet<Usuario> Usuario { get; set; }

        /// <summary>
        /// Classe Responsável por Relacionar o MAP com a sua Entidade
        /// </summary>
        /// <param name="modelBuilder"></param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new EnderecoMap());
            modelBuilder.ApplyConfiguration(new MunicipioMap());
            modelBuilder.ApplyConfiguration(new EstadoMap());
            modelBuilder.ApplyConfiguration(new IntervaloDoacaoMap());
            modelBuilder.ApplyConfiguration(new UsuarioMap());
        }
    }
}
