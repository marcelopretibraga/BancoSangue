using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class EstadoMap : IEntityTypeConfiguration<Estado>
    {
        public void Configure(EntityTypeBuilder<Estado> builder)
        {
            builder.ToTable("estado");
            builder.Property(e => e.Codigo).HasColumnName("cd_estado");
            builder.Property(e => e.Descricao).HasColumnName("ds_estado");
            builder.Property(e => e.Sigla).HasColumnName("sg_estado");
            builder.Property(e => e.DataRegistro).HasColumnName("dt_record");
            builder.Property(e => e.DataAtualizacao).HasColumnName("dt_update");
            builder.HasKey(e => e.Codigo);                
        }
    }
}
