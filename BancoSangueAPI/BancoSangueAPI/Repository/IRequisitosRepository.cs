using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public interface IRequisitosRepository : IDisposable
   
    {
        void Save(RequisitosBasicos requisitosBasicos);
        void Update(RequisitosBasicos requisitosBasicos);
         void Delete(int codigo);

        List<RequisitosBasicos> GetAll();
        RequisitosBasicos GetById(int id);
    }
}
