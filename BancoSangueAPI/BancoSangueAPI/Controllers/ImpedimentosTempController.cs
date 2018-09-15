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
    [Route("api/Municipio")]
    public class ImpedimentosTempController : Controller
    {
        private readonly IImpedimentosTempRepository _impedimentosTempRepository;

        public ImpedimentosTempController(IImpedimentosTempRepository impedimentosTempRepository)
        {
            _impedimentosTempRepository = impedimentosTempRepository;
        }

        /// <summary>
        /// Metodo que retorna todos os ImpedimentosTemporarios
        /// </summary>
        /// <returns>Lista de ImpedimentosTemporarios</returns>
        [HttpGet]
        public IEnumerable<ImpedimentosTemp> GetAll() =>
            _impedimentosTempRepository.GetAll();

        /// <summary>
        /// Metodo que retorna o ImpedimentosTemporarios por ID
        /// </summary>
        /// <param Codigo do ImpedimentosTemporarios="id"></param>
        /// <returns>ImpedimentosTemporarios</returns>
        [HttpGet]
        [Route("GetById")]
        public ImpedimentosTemp GetById(int id) =>
            _impedimentosTempRepository.GetById(id);

        /// <summary>
        /// Metodo que salva um ImpedimentosTemporarios
        /// </summary>
        /// <param ImpedimentosTemporarios a ser salvo="ImpedimentosTemporarios"></param>
        [HttpPost]
        public void Save([FromBody] ImpedimentosTemp impedimentoTemp) =>
            _impedimentosTempRepository.Save(impedimentoTemp);

        /// <summary>
        /// Metodo que deleta um ImpedimentosTemporarios
        /// </summary>
        /// <param Codigo do ImpedimentosTemporarios a ser deletado="codigo"></param>
        [HttpDelete]
        public void Delete(int codigo) =>
            _impedimentosTempRepository.Delete(codigo);

        /// <summary>
        /// Metodo que altera um ImpedimentosTemporarios
        /// </summary>
        /// <param ImpedimentosTemporarios a ser alterado="ImpedimentosTemporarios"></param>
        [HttpPut]
        public void Update(ImpedimentosTemp impedimentoTemp) =>
            _impedimentosTempRepository.Update(impedimentoTemp);

    }
}