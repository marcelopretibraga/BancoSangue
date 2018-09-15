using BancoSangueAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Repository
{
    public interface IUsuarioRepository : IDisposable
    {
        void Save(Usuario usuario);

        void Update(Usuario usuario);

        void Delete(int codigo);

        List<Usuario> GetAll();

        Usuario GetById(int id);
    }
}
