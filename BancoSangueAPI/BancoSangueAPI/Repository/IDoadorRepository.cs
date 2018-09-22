using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public interface IDoadorRepository : IDisposable
    {
        void Save(Doador Doador);
        void Update(Doador doador);
        void Delete(int Id);
        List<Doador> getAll();
        Doador getById(int Id);

    }
}
