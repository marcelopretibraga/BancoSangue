using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    interface IVeiculoRepository : IDisposable
    {
        void Save(Veiculo veiculo);

        void Update(Veiculo veiculo);

        void Delete(int codigo);

        List<Veiculo> GetAll();

        Veiculo GetById(int id);
    }
}
