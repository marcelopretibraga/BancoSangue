using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public interface IPontoColetaRepository : IDisposable
    {
        void Save(PontoColeta municipio);

        void Update(PontoColeta municipio);

        void Delete(int codigo);

        List<PontoColeta> GetAll();

        PontoColeta GetById(int id);
    }
}
