using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public interface IIntervaloDoacaoRepository : IDisposable
    {
        void Save(IntervaloDoacao intervaloDoacao);

        void Update(IntervaloDoacao intervaloDoacao);

        void Delete(int codigo);

        List<IntervaloDoacao> GetAll();

        IntervaloDoacao GetById(int id);
    }
}
