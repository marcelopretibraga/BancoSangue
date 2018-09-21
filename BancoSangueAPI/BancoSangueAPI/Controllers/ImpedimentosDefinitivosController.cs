 using BancoSangueAPI.Model;
using BancoSangueAPI.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/ImpedimentosDefinitivos")]
    public class ImpedimentosDefinitivosController : Controller
    {
        private readonly IImpedimentosDefinitivosRepository _impedimentosDefinitivosRepository;

        public ImpedimentosDefinitivosController(IImpedimentosDefinitivosRepository impedimentosDefinitivosRepository)
        {
            _impedimentosDefinitivosRepository = impedimentosDefinitivosRepository;
        }

        /// <summary>
        /// Metodo que retorna todos os Municipios
        /// </summary>
        /// <returns>Lista de municipios</returns>
        [HttpGet]
        public IEnumerable<ImpedimentosDefinitivos> GetAll() =>
            _impedimentosDefinitivosRepository.GetAll();

        [HttpPost]
        public void Save([FromBody] ImpedimentosDefinitivos impedimentosDefinitivos) =>
            _impedimentosDefinitivosRepository.Save(impedimentosDefinitivos);

        [HttpPut]
        public void Update(ImpedimentosDefinitivos impedimentoTemp) =>
            _impedimentosDefinitivosRepository.Update(impedimentoTemp);

        [HttpDelete]
        public void Delete(int codigo) =>
            _impedimentosDefinitivosRepository.Delete(codigo);

        [HttpGet]
        [Route("id")]
        public ImpedimentosDefinitivos GetById(int id) =>
            _impedimentosDefinitivosRepository.GetById(id);

    }
}
