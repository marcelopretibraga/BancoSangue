using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class IntervaloDoacaoMap : IEntityTypeConfiguration<IntervaloDoacao>
    {
        public void Configure(EntityTypeBuilder<IntervaloDoacao> builder)
        {
            builder.ToTable("intervalodoacao");
            builder.Property(i => i.Codigo).HasColumnName("cd_intervalodoacao");
            builder.Property(i => i.CodigoDoador).HasColumnName("cd_doador");
            builder.HasOne(i => i.Doador).WithMany().HasForeignKey(d => d.CodigoDoador);
            builder.Property(i => i.DataUltimaDoacao).HasColumnName("dt_ultimadoacao");
            builder.Property(i => i.CodigoPontoColeta).HasColumnName("cd_pontocoleta");
            builder.HasOne(i => i.PontoColeta).WithMany().HasForeignKey(p => p.CodigoPontoColeta);
            builder.HasKey(i => i.Codigo);
        }
    }
}
