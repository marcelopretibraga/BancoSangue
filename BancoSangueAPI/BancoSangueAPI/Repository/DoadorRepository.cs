using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public class DoadorRepository : IDoadorRepository
    {
        private readonly BancoSangueContext _context;

        public DoadorRepository(BancoSangueContext context)
        {
            _context = context;
        }

        public void Dispose()
        {
            
        }

        public List<Doador> getAll() =>
            _context.Doador.ToList();

        public Doador getById(int Id) =>
            _context.Doador.Where(D => D.Codigo == Id).FirstOrDefault();

        public void Save(Doador Doador)
        {
            _context.Doador.Add(Doador);
            _context.SaveChanges();
        }

        public void Update(Doador doador)
        {
            _context.Doador.Update(doador);
            _context.SaveChanges();
        }

        public void Delete(int Id)
        {
            var DoadorRemove = _context.Doador.Where(D => D.Codigo == Id).FirstOrDefault();
            _context.Doador.Remove(DoadorRemove);
            _context.SaveChanges();
        }
    }
}
