using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public interface IEnderecoRepository : IDisposable
    {
        void Save(Endereco endereco);
        void Update(Endereco endereco);
        void Delete(int id);
        List<Endereco> getAll();
        Endereco GetById(int Id);
        //IEnumerable<Endereco> GetByDoador(int DoadorId);
    }
}
