using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public class EnderecoRepository : IEnderecoRepository
    {
        private readonly BancoSangueContext _context;
        
        public void Dispose()
        {
            
        }

        public List<Endereco> getAll() =>
            _context.Endereco.ToList();

        public IEnumerable<Endereco> getByDoador(int DoadorId)
        {
            _context.Endereco.Where(E => E.Doador.Codigo == DoadorId).FirstOrDefault();
        }

        public Endereco getById()
        {
            throw new NotImplementedException();
        }

        public void Save(Endereco endereco)
        {
            throw new NotImplementedException();
        }

        public void Update(Endereco endereco)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {

        }
    }
}
