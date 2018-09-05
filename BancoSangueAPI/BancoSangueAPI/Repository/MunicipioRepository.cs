using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BancoSangueAPI.Model;

namespace BancoSangueAPI.Repository
{
    public class MunicipioRepository : IMunicipioRepository
    {
        private readonly BancoSangueContext _context;

        public MunicipioRepository(BancoSangueContext context)
        {
            _context = context;
        }

        public void Delete(int codigo)
        {
            var municipioRemover = _context.Municipio.Where(m => m.Codigo == codigo).FirstOrDefault();
            _context.Municipio.Remove(municipioRemover);
            _context.SaveChanges();
        }

        public void Dispose()
        {

        }

        public List<Municipio> GetAll() => 
            _context.Municipio.ToList();
        
        public Municipio GetById(int id) => 
            _context.Municipio.Where(m => m.Codigo == id).FirstOrDefault();

        public IEnumerable<Municipio> GetByUF(int codigoEstado) => 
            _context.Municipio.Where(m => m.CodigoEstado == codigoEstado);
        
        public void Save(Municipio municipio)
        {
            _context.Municipio.Add(municipio);
            _context.SaveChanges();
        }

        public void Update(Municipio municipio)
        {
            _context.Municipio.Update(municipio);
            _context.SaveChanges();
        }
    }
}
