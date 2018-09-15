using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public class CuidadosRepository : ICuidadosRepository
    {
        private readonly BancoSangueContext _context;

        public CuidadosRepository(BancoSangueContext context)
        {
            _context = context;
        }

        public void Delete(int Codigo)
        {
            var cuidadoRemover = _context.Cuidados.Where(c => c.Codigo == Codigo).FirstOrDefault();
            _context.Cuidados.Remove(cuidadoRemover);
            _context.SaveChanges();
        }

        public void Dispose()
        {

        }

        public List<Cuidados> GetAll() => _context.Cuidados.ToList();

        public Cuidados GetById(int id) =>
            _context.Cuidados.Where(c => c.Codigo == id).FirstOrDefault();

        public void Save(Cuidados cuidados)
        {
            _context.Cuidados.Add(cuidados);
            _context.SaveChanges();
        }

        public void Update(Cuidados cuidados)
        {
            _context.Cuidados.Update(cuidados);
            _context.SaveChanges();
        }
    }
}
