using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class DoadorMap : IEntityTypeConfiguration<Doador>
    {
        public void Configure(EntityTypeBuilder<Doador> builder)
        {

            builder.ToTable("doador");
            builder.Property(d => d.Codigo).HasColumnName("cd_doador");
            builder.Property(d => d.Nome).HasColumnName("nm_doador");
            builder.Property(d => d.Cpf).HasColumnName("nr_cpf");
            builder.Property(d => d.Rg).HasColumnName("nr_rg");
            builder.Property(d => d.Telefone).HasColumnName("nr_telefone");
            builder.Property(d => d.DataNascimento).HasColumnName("dt_nascimento");
            builder.Property(d => d.IsDoador).HasColumnName("st_doador");
            builder.Property(d => d.Peso).HasColumnName("qt_peso");
            builder.Property(d => d.Sexo).HasColumnName("sexo");
            builder.HasMany(d => d.Enderecos).WithOne().HasForeignKey(e => e.Doador);
            builder.HasKey(d => d.Codigo);
           
        }
    }
}
