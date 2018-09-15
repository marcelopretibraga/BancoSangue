using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class CuidadosMap : IEntityTypeConfiguration<Cuidados>
    {
        public void Configure(EntityTypeBuilder<Cuidados>builder)
        {
            builder.ToTable("cuidados");
            builder.Property(c => c.Codigo).HasColumnName("cd_cuidados");
            builder.Property(c => c.Descricao).HasColumnName("ds_cuidados");
        }
    }
}
