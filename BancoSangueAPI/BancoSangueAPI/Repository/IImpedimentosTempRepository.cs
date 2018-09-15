using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public interface IImpedimentosTempRepository : IDisposable
    {
        void Save(ImpedimentosTemp impedimentoTemp);

        void Update(ImpedimentosTemp impedimentoTemp);

        void Delete(int codigo);

        List<ImpedimentosTemp> GetAll();

        ImpedimentosTemp GetById(int id);

    }
}
