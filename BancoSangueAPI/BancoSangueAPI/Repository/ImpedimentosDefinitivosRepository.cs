using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public class ImpedimentosDefinitivosRepository : IImpedimentosDefinitivosRepository
    {
        private readonly BancoSangueContext _context;

        public ImpedimentosDefinitivosRepository(BancoSangueContext context)
        {
            _context = context;
        }


        public void Delete(int codigo)
        {
            var ImpDefRemover = _context.ImpedimentosDefinitivos.Where(i => i.Codigo == codigo).FirstOrDefault();
            _context.ImpedimentosDefinitivos.Remove(ImpDefRemover);
            _context.SaveChanges();
        }

        public void Dispose()
        {
            //Dispose();
        }

        public List<ImpedimentosDefinitivos> GetAll() =>
            _context.ImpedimentosDefinitivos.ToList();

        public ImpedimentosDefinitivos GetById(int id) =>
            _context.ImpedimentosDefinitivos.Where(i => i.Codigo == id).FirstOrDefault();

        public void Save(ImpedimentosDefinitivos impedimentosDefinitivos)
        {
            _context.ImpedimentosDefinitivos.Add(impedimentosDefinitivos);
            _context.SaveChanges();
        }

        public void Update(ImpedimentosDefinitivos impedimentosDefinitivos)
        {
            _context.ImpedimentosDefinitivos.Update(impedimentosDefinitivos);
            _context.SaveChanges();
        }
      
    }
}
