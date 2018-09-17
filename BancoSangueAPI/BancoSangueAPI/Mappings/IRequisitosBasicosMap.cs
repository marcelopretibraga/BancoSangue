using BancoSangueAPI.Model;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BancoSangueAPI.Mappings
{
    public interface IRequisitosBasicosMap
    {
        void Configure(EntityTypeBuilder<RequisitosBasicos> builder);
    }
}