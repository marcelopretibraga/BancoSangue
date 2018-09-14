using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class ImpedimentosDefinitivosMap : IEntityTypeConfiguration<ImpedimentosDefinitivos>
    {
        public void Configure(EntityTypeBuilder<ImpedimentosDefinitivos> builder)
        {
            builder.ToTable("impedimentosdefinitivos");
            builder.Property(i => i.Codigo).HasColumnName("cd_impedimentosdefinitivos");
            builder.Property(i => i.Descricao).HasColumnName("ds_impedimentosdefinitivos");
            builder.Property(i => i.DataRegistro).HasColumnName("dt_impedimentosdefinitivos");
        }
    }
}
