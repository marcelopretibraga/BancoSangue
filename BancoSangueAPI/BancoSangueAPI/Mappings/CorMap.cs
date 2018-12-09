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
            builder.Property(v => v.Codigo).HasColumnName("cd_cor");
            builder.Property(v => v.Descricao).HasColumnName("ds_cor");
            builder.HasKey(v => v.Codigo);
        }
    }
}
