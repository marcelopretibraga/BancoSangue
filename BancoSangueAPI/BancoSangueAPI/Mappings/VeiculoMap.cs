using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class VeiculoMap : IEntityTypeConfiguration<Veiculo>
    {
        public void Configure(EntityTypeBuilder<Veiculo> builder)
        {
            builder.ToTable("veiculo");
            builder.Property(v => v.Codigo).HasColumnName("cd_veiculo");
            builder.Property(v => v.Placa).HasColumnName("nr_placa");
            builder.Property(v => v.Passageiros).HasColumnName("nr_passageiros");
            builder.Property(v => v.Portas).HasColumnName("nr_portas");
            builder.Property(v => v.Modelo).HasColumnName("nr_modelo");
            builder.Property(v => v.Chassi).HasColumnName("nr_chassi");
            builder.Property(v => v.Ano).HasColumnName("nr_ano");
            builder.Property(v => v.Registro).HasColumnName("dt_retistro");
            builder.Property(v => v.codigoCor).HasColumnName("cd_cor");
            builder.HasKey(v => v.Codigo);
            builder.HasOne(v => v.Cor).WithMany().HasForeignKey(c => c.codigoCor);
        }
    }
}
