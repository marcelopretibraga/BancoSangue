using BancoSangueAPI.Model;
using BancoSangueAPI.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/PontoColeta")]
    public class PontoColetaController : Controller
    {
        private readonly IPontoColetaRepository _pontoColetaRepository;

        public PontoColetaController(IPontoColetaRepository pontoColetaRepository)
        {
            _pontoColetaRepository = pontoColetaRepository;
        }

        /// <summary>
        /// Metodo que retorna todos os Municipios
        /// </summary>
        /// <returns>Lista de municipios</returns>
        [HttpGet]
        public IEnumerable<PontoColeta> GetAll() =>
            _pontoColetaRepository.GetAll();

        [HttpPost]
        public void Save([FromBody] PontoColeta ponto) =>
            _pontoColetaRepository.Save(ponto);

    }
}
