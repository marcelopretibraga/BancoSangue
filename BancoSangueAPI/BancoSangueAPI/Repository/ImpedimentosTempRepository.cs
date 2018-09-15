using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BancoSangueAPI.Model;

namespace BancoSangueAPI.Repository
{
    public class ImpedimentosTempRepository : IImpedimentosTempRepository
    {
        private readonly BancoSangueContext _context;

        public ImpedimentosTempRepository(BancoSangueContext context)
        {
            _context = context;
        }

        public void Delete(int codigo)
        {
            var ImpedimentosTempRemover = _context.ImpedimentosTemp.Where(i => i.Codigo == codigo).FirstOrDefault();
            _context.ImpedimentosTemp.Remove(ImpedimentosTempRemover);
            _context.SaveChanges();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public List<ImpedimentosTemp> GetAll() =>
            _context.ImpedimentosTemp.ToList();

        public ImpedimentosTemp GetById(int id) =>
            _context.ImpedimentosTemp.Where(i => i.Codigo == id).FirstOrDefault();

        public void Save(ImpedimentosTemp impedimentoTemp)
        {
            _context.ImpedimentosTemp.Add(impedimentoTemp);
            _context.SaveChanges();
        }

        public void Update(ImpedimentosTemp impedimentoTemp)
        {
            _context.ImpedimentosTemp.Update(impedimentoTemp);
            _context.SaveChanges();
        }
    }
}
