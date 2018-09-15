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

        [HttpGet]
        public IEnumerable<ImpedimentosDefinitivos> GetAll() =>
            _impedimentosDefinitivosRepository.GetAll();

        [HttpPost]
        public void Save([FromBody] ImpedimentosDefinitivos impedimentosDefinitivos) =>
            _impedimentosDefinitivosRepository.Save(impedimentosDefinitivos);

        [HttpPut]
        public void Update([FromBody] ImpedimentosDefinitivos impedimentosDefinitivos) =>
            _impedimentosDefinitivosRepository.Update(impedimentosDefinitivos);
        [HttpGet] public IEnumerable<ImpedimentosDefinitivos> GetId

    }
}
