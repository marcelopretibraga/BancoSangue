using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class ImpedimentosTempMap : IEntityTypeConfiguration<ImpedimentosTemp>
    {
        public void Configure(EntityTypeBuilder<ImpedimentosTemp> builder)
        {
            builder.ToTable("impedimentostemp");
            builder.Property(i => i.Codigo).HasColumnName("cd_impedimento");
            builder.Property(i => i.Descricao).HasColumnName("ds_tipoImpedimento");
            builder.Property(i => i.DtCadastro).HasColumnName("dt_cadastro");
            builder.Property(i => i.CodDoador).HasColumnName("cd_doador");
            builder.HasOne(i => i.Doador).WithMany().HasForeignKey(d => d.CodDoador);
            builder.HasKey(i => i.Codigo);
        }
    }
}
