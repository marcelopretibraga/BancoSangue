using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
  
        public class RequisitosBasicosMap : IEntityTypeConfiguration<RequisitosBasicos>
        {
           

            public void Configure(EntityTypeBuilder<RequisitosBasicos> builder)
            {
                builder.ToTable("requisitosbasicos");
                builder.Property(r => r.Codigo).HasColumnName("cd_requisito");
                builder.Property(r => r.Descricao).HasColumnName("descricao");
                builder.Property(r => r.Data).HasColumnName("data");
            }
       
        }
    }
}
