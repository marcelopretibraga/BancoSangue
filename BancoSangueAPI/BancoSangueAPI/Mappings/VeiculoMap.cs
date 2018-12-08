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
            builder.Property(e => e.Codigo).HasColumnName("cd_veiculo");
            builder.Property(e => e.Nr_placa).HasColumnName("nr_placa");
            builder.Property(e => e.Nr_ano).HasColumnName("nr_ano");
            builder.Property(e => e.Nr_modelo).HasColumnName("nr_modelo");
            builder.Property(e => e.Cd_cor).HasColumnName("cd_cor");
            builder.Property(e => e.Nr_chassi).HasColumnName("nr_chassi");
            builder.Property(e => e.Nr_passageiros).HasColumnName("nr_passageiros");
            builder.Property(e => e.Nr_portas).HasColumnName("nr_portas");
            builder.Property(e => e.Dt_registro).HasColumnName("dt_retistro");
            builder.HasKey(e => e.Codigo);
            builder.HasOne(m => m.Cor_veiculo).WithMany().HasForeignKey(e => e.Cd_cor);
        }
        /*
         * public int Codigo { get; set; }
        public string Nr_placa { get; set; }
        public int Nr_ano { get; set; }
        public int Nr_modelo { get; set; }
        public int Cd_cor { get; set; }
        public string Nr_chassi { get; set; }
        public int Nr_passageiros { get; set; }
        public int Nr_portas { get; set; }
        public DateTime Dt_registro { get; set; }
        public Cor Cor_veiculo { get; set; }

    cd_veiculo integer NOT NULL,
    nr_placa character varying(20) COLLATE pg_catalog."default" NOT NULL,
    nr_ano integer,
	nr_modelo integer,
    cd_cor integer NOT NULL,
    nr_chassi character varying(20) COLLATE pg_catalog."default" NOT NULL,
	nr_passageiros integer not null, 
	nr_portas integer not null, 
    dt_retistro date NOT NULL,
    CONSTRAINT pk_veiculo PRIMARY KEY (cd_veiculo), 
	CONSTRAINT fk_veiculo_cor FOREIGN KEY (cd_cor)
         * /*/
    }
}
