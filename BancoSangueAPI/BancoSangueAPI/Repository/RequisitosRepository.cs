using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BancoSangueAPI.Model;

namespace BancoSangueAPI.Repository
{
    public class RequisitosRepository : IRequisitosRepository
    
{
          private readonly BancoSangueContext _context;

    public RequisitosRepository(BancoSangueContext context)
    {
        _context = context;
    }

        public void Delete(int codigo)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public List<RequisitosBasicos> GetAll()
        {
            throw new NotImplementedException();
        }

        public RequisitosBasicos GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Save(RequisitosBasicos requisitosBasicos)
        {
            throw new NotImplementedException();
        }

        public void Update(RequisitosBasicos requisitosBasicos)
        {
            throw new NotImplementedException();
        }
    }
}
