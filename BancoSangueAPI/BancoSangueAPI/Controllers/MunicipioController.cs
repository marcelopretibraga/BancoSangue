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
        public IEnumerable<Municipio> GetAll() => 
            _municipioRepository.GetAll();

        [HttpPost]
        public void Save([FromBody] Municipio municipio) =>
            _municipioRepository.Save(municipio);
        
    }
}