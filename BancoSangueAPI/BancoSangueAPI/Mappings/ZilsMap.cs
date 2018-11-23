using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class ZilsMap : IEntityTypeConfiguration<Zils>
    {
        public void Configure(EntityTypeBuilder<Zils> builder)
        {
            builder.ToTable("zils");
            builder.Property(e => e.Codigo).HasColumnName("nr_codigo");
            builder.Property(e => e.Nome).HasColumnName("ds_nome");
            builder.Property(e => e.Idade).HasColumnName("nr_idade");
            builder.Property(e => e.Total).HasColumnName("vl_total");
            builder.HasKey(e => e.Codigo);
        }
    }
}
