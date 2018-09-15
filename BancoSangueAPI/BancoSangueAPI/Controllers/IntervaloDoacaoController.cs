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
    [Route("api/IntervaloDoacao")]
    public class IntervaloDoacaoController : Controller
    {
        private readonly IIntervaloDoacaoRepository _intervaloDoacaoRepository;

        public IntervaloDoacaoController(IIntervaloDoacaoRepository intervaloDoacaoRepository)
        {
            _intervaloDoacaoRepository = intervaloDoacaoRepository;
        }

        /// <summary>
        /// Metodo que retorna todos os Intervalos de Doacao
        /// </summary>
        /// <returns>Lista de IntervaloDoacao</returns>
        [HttpGet]
        public IEnumerable<IntervaloDoacao> GetAll() =>
            _intervaloDoacaoRepository.GetAll();

        /// <summary>
        /// Metodo que retorna o Intervalos de Doacao por ID
        /// </summary>
        /// <param Codigo do IntervaloDoacao="id"></param>
        /// <returns>IntervaloDoacao</returns>
        [HttpGet]
        [Route("GetById")]
        public IntervaloDoacao GetById(int id) =>
            _intervaloDoacaoRepository.GetById(id);

        /// <summary>
        /// Metodo que salva um Intervalo de Doacao
        /// </summary>
        /// <param IntervaloDoacao a ser salvo="intervaloDoacao"></param>
        [HttpPost]
        public void Save([FromBody] IntervaloDoacao intervaloDoacao) =>
            _intervaloDoacaoRepository.Save(intervaloDoacao);

        /// <summary>
        /// Metodo que deleta um Intervalo de Doacao
        /// </summary>
        /// <param Codigo do IntervaloDoacao a ser deletado="codigo"></param>
        [HttpDelete]
        public void Delete(int codigo) =>
            _intervaloDoacaoRepository.Delete(codigo);

        /// <summary>
        /// Metodo que altera um Intervalo de Doacao
        /// </summary>
        /// <param IntervaloDoacao a ser alterado="intervaloDoacao"></param>
        [HttpPut]
        public void Update(IntervaloDoacao intervaloDoacao) =>
            _intervaloDoacaoRepository.Update(intervaloDoacao);
    }
}