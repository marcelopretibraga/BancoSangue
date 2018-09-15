using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public class IntervaloDoacaoRepository : IIntervaloDoacaoRepository
    {
        private readonly BancoSangueContext _context;

        public IntervaloDoacaoRepository(BancoSangueContext context)
        {
            _context = context;
        }

        public void Delete(int codigo)
        {
            var intervaloDoacaoRemover = _context.IntervaloDoacao.Where(i => i.Codigo == codigo).FirstOrDefault();
            _context.IntervaloDoacao.Remove(intervaloDoacaoRemover);
            _context.SaveChanges();
        }

        public void Dispose()
        {
        }

        public List<IntervaloDoacao> GetAll() =>
            _context.IntervaloDoacao.ToList();


        public IntervaloDoacao GetById(int id) =>
            _context.IntervaloDoacao.Where(i => i.Codigo == id).FirstOrDefault();

        public void Save(IntervaloDoacao intervaloDoacao)
        {
            _context.IntervaloDoacao.Add(intervaloDoacao);
            _context.SaveChanges();
        }

        public void Update(IntervaloDoacao intervaloDoacao)
        {
            _context.IntervaloDoacao.Update(intervaloDoacao);
            _context.SaveChanges();
        }
    }
}
