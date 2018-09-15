using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public class PontoColetaRepository : IPontoColetaRepository
    {
        private readonly BancoSangueContext _context;

        public PontoColetaRepository (BancoSangueContext context)
        {
            _context = context;
        }

        public void Delete(int codigo)
        {
            var pontoColetaRemover = _context.PontoColeta.Where(m => m.Codigo == codigo).FirstOrDefault();
            _context.PontoColeta.Remove(pontoColetaRemover);
            _context.SaveChanges();
        }

        public void Dispose()
        {

        }

        public List<PontoColeta> GetAll() =>
            _context.PontoColeta.ToList();

        public PontoColeta GetById(int id) =>
            _context.PontoColeta.Where(m => m.Codigo == id).FirstOrDefault();
        
        public void Save(PontoColeta pontoColeta)
        {
            _context.PontoColeta.Add(pontoColeta);
            _context.SaveChanges();
        }

        public void Update(PontoColeta pontoColeta)
        {
            _context.PontoColeta.Update(pontoColeta);
            _context.SaveChanges();
        }
    }
}
