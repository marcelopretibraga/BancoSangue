using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public interface ICuidadosRepository : IDisposable
    {
        void Save(Cuidados cuidado);

        void Update(Cuidados cuidado);

        void Delete(int codigo);

        List<Cuidados> GetAll();

        Cuidados GetById(int id);
    }
}
