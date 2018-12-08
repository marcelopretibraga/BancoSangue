using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class CorMap : IEntityTypeConfiguration<Cor>
    {
        public void Configure(EntityTypeBuilder<Cor> builder)
        {
            builder.ToTable("cor");
            builder.Property(e => e.Codigo).HasColumnName("cd_cor");
            builder.Property(e => e.Descricao).HasColumnName("ds_cor");
            builder.HasKey(e => e.Codigo);
        }
    }
}
