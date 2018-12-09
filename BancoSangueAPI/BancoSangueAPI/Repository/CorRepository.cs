using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public class CorRepository : ICorRepository
    {
        private readonly BancoSangueContext _context;

        public CorRepository (BancoSangueContext context)
        {
            _context = context;
        }

        public void Delete(int codigo)
        {
            var corRemover = _context.Cor.Where(c => c.Codigo == codigo).FirstOrDefault();
            _context.Cor.Remove(corRemover);
            _context.SaveChanges();
        }

        public void Dispose()
        {

        }

        public List<Cor> GetAll() =>
            _context.Cor.ToList();

        public Cor GetById(int id) =>
            _context.Cor.Where(c => c.Codigo == id).FirstOrDefault();

        public void Save(Cor cor)
        {
            _context.Cor.Add(cor);
            _context.SaveChanges();
        }

        public void Update(Cor cor)
        {
            _context.Cor.Update(cor);
            _context.SaveChanges();
        }
    }
}
