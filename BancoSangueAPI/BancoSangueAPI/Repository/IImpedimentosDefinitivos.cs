using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public interface IImpedimentosDefinitivos : IDisposable
    {
        void Save(ImpedimentosDefinitivos impedimentosDefinitivos);

        void Update(ImpedimentosDefinitivos impedimentosDefinitivos);

        void Delete(int codigo);

        List<ImpedimentosDefinitivos> GetAll();

        ImpedimentosDefinitivos GetById(int id);

    }
}
