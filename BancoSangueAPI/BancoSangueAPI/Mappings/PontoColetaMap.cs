using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class PontoColetaMap : IEntityTypeConfiguration<PontoColeta>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<PontoColeta> builder)
        {
            builder.ToTable("pontocoleta");
            builder.Property(p => p.Codigo).HasColumnName("cd_pontocoleta");
            builder.Property(p => p.Descricao).HasColumnName("ds_pontocoleta");
            builder.Property(p => p.CodigoEndereco).HasColumnName("cd_endereco");
            builder.HasOne(p => p.Endereco).WithMany().HasForeignKey(e => e.CodigoEndereco);
            builder.HasKey(p => p.Codigo);
        }
    }
}
