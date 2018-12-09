using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BancoSangueAPI.Model;

namespace BancoSangueAPI.Repository
{
    public class VeiculoRepository : IVeiculoRepository
    {
        private readonly BancoSangueContext _context;

        public VeiculoRepository(BancoSangueContext context)
        {
            _context = context;
        }

        public void Delete(int codigo)
        {
            var veiculoRemover = _context.Veiculo.Where(v => v.Codigo == codigo).FirstOrDefault();
            _context.Veiculo.Remove(veiculoRemover);
            _context.SaveChanges();
        }

        public void Dispose()
        {
            
        }

        public List<Veiculo> GetAll() =>
            _context.Veiculo.ToList();

        public Veiculo GetById(int id) =>
            _context.Veiculo.Where(c => c.Codigo == id).FirstOrDefault();

        public void Save(Veiculo veiculo)
        {
            _context.Veiculo.Add(veiculo);
            _context.SaveChanges();
        }

        public void Update(Veiculo veiculo)
        {
            _context.Veiculo.Update(veiculo);
            _context.SaveChanges();
        }
    }
}
