using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class EnderecoMap : IEntityTypeConfiguration<Endereco>
    {
        public void Configure(EntityTypeBuilder<Endereco> builder)
        {
            builder.ToTable("endereco");
            builder.Property(e => e.Codigo).HasColumnName("cd_endereco");
            builder.Property(e => e.Logradouro).HasColumnName("nm_logradouro");
            builder.Property(e => e.Numero).HasColumnName("nr_numero");
            builder.Property(e => e.Complemento).HasColumnName("ds_complemento");
            builder.Property(e => e.Bairro).HasColumnName("ds_bairro");
            builder.Property(e => e.Cep).HasColumnName("nr_cep");
            builder.HasOne(e => e.Municipio).WithMany().HasForeignKey(m => m.CodigoMunicipio);
            builder.HasKey(e => e.Codigo);
        }
    }
}
