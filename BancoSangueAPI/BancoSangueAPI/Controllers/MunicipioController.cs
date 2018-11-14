using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BancoSangueAPI.Model;
using BancoSangueAPI.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BancoSangueAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Municipio")]
    public class MunicipioController : Controller
    {
        private readonly IMunicipioRepository _municipioRepository;

        public MunicipioController(IMunicipioRepository municipioRepository)
        {
            _municipioRepository = municipioRepository;
        }

        /// <summary>
        /// Metodo que retorna todos os Municipios
        /// </summary>
        /// <returns>Lista de municipios</returns>
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Municipio> GetAll() =>
            _municipioRepository.GetAll();

        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> Save([FromBody] Municipio municipio)
        {
            _municipioRepository.Save(municipio);
            return Ok(municipio);
        }

        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> PutMunicipio([FromBody] Municipio municipio)
        {
            _municipioRepository.Update(municipio);
            return Ok(municipio);
        }

        [HttpDelete]
        [Route("Remove")]
        public async Task<IActionResult> DeleteMunicipio(int id)
        {
            _municipioRepository.Delete(id);
            return Ok(id);
        }

    }
}