using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BancoSangueAPI.Model;

namespace BancoSangueAPI.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly BancoSangueContext _context;

        public UsuarioRepository(BancoSangueContext context)
        {
            _context = context;
        }

        public void Delete(int codigo)
        {
            var usuarioRemover = _context.Usuario.Where(u => u.Codigo == codigo).FirstOrDefault();
            _context.Usuario.Remove(usuarioRemover);
            _context.SaveChanges();
        }

        public void Dispose()
        {
        }

        public List<Usuario> GetAll() =>
            _context.Usuario.ToList();

        public Usuario GetById(int id) =>
            _context.Usuario.Where(u => u.Codigo == id).FirstOrDefault();

        public void Save(Usuario usuario)
        {
            _context.Usuario.Add(usuario);
            _context.SaveChanges();
        }

        public void Update(Usuario usuario)
        {
            _context.Usuario.Update(usuario);
            _context.SaveChanges();
        }
    }
}
