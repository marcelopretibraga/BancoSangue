using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BancoSangueAPI.Model;
using BancoSangueAPI.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BancoSangueAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Usuario")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        /// <summary>
        /// Metodo que retorna todos os Usuarios
        /// </summary>
        /// <returns>Lista de Usuario</returns>
        [HttpGet]
        public IEnumerable<Usuario> GetAll() =>
            _usuarioRepository.GetAll();

        /// <summary>
        /// Metodo que retorna o Usuario por ID
        /// </summary>
        /// <param Codigo do Usuario="id"></param>
        /// <returns>usuario</returns>
        [HttpGet]
        [Route("GetById")]
        public Usuario GetById(int id) =>
            _usuarioRepository.GetById(id);

        /// <summary>
        /// Metodo que salva um Usuario
        /// </summary>
        /// <param usuario a ser salvo="usuario"></param>
        [HttpPost]
        public void Save([FromBody] Usuario usuario) =>
            _usuarioRepository.Save(usuario);

        /// <summary>
        /// Metodo que deleta um Usuario
        /// </summary>
        /// <param Codigo do Usuario a ser deletado="codigo"></param>
        [HttpDelete]
        public void Delete(int codigo) =>
            _usuarioRepository.Delete(codigo);

        /// <summary>
        /// Metodo que altera um Usuario
        /// </summary>
        /// <param Usuario a ser alterado="usuario"></param>
        [HttpPut]
        public void Update(Usuario usuario) =>
            _usuarioRepository.Update(usuario);
    }
}