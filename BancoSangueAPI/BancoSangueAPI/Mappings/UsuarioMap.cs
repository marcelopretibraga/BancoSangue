using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Mappings
{
    public class UsuarioMap : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.ToTable("usuario");
            builder.Property(u => u.Codigo).HasColumnName("cd_usuario");
            builder.Property(u => u.Login).HasColumnName("login_usuario");
            builder.Property(u => u.Senha).HasColumnName("login_senha");
            builder.Property(u => u.Email).HasColumnName("login_email");
            builder.HasKey(u => u.Codigo);
        }
    }
}
