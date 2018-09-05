using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public interface IMunicipioRepository : IDisposable
    {
        void Save(Municipio municipio);

        void Update(Municipio municipio);

        void Delete(int codigo);

        List<Municipio> GetAll();

        Municipio GetById(int id);

        IEnumerable<Municipio> GetByUF(int codigo);
    }
}
