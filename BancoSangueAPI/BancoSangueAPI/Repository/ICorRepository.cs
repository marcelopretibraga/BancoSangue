using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    interface ICorRepository : IDisposable
    {
        void Save(Cor cor);

        void Update(Cor cor);

        void Delete(int codigo);

        List<Cor> GetAll();

        Cor GetById(int id);
    }
}
