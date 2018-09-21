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
    [Route("api/RequisitosBasicos")]
    public class RequisitosBasicosController: Controller
    {
        private readonly IRequisitosRepository _requisitosRepository;
        public RequisitosBasicosController(IRequisitosRepository requisitosRepository)
        {
            _requisitosRepository = requisitosRepository;
        }
        [HttpGet]
        public  IEnumerable <RequisitosBasicos> GetAll() => 
            _requisitosRepository.GetAll();

       
        [HttpPost]
        public void Save([FromBody] RequisitosBasicos requisitos) =>
          _requisitosRepository.Save(requisitos);

        [HttpDelete]
        public void Delete([FromBody] RequisitosBasicos requisitos) =>
        _requisitosRepository.Delete(requisitos);

        [HttpPut]
        public void Update([FromBody] RequisitosBasicos requisitos) =>
     _requisitosRepository.Update(requisitos);
    }
}
