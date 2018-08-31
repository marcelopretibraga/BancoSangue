using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class MunicipioMap : IEntityTypeConfiguration<Municipio>
    {
        public void Configure(EntityTypeBuilder<Municipio> builder)
        {
            builder.ToTable("municipio");
            builder.Property(m => m.Codigo).HasColumnName("cd_municipio");
            builder.Property(m => m.Descricao).HasColumnName("ds_municipio").HasMaxLength(100);
            builder.Property(m => m.Domicilios).HasColumnName("qt_domicilios");
            builder.Property(m => m.Populacao).HasColumnName("qt_populacao");
            builder.Property(m => m.Pib).HasColumnName("vl_pib");
            //Municipio tem um Estado e aponta pra FK do Banco Cuja Property é Codigo
            builder.HasOne(m => m.Estado).WithMany().HasForeignKey(e => e.CodigoEstado);
            builder.HasKey(m => m.Codigo);
        }
    }
}
