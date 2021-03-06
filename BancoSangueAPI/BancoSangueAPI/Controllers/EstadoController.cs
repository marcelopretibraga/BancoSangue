﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BancoSangueAPI.Model;

namespace BancoSangueAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Estado")]
    public class EstadoController : Controller
    {
        private readonly BancoSangueContext _context;
        /// <summary>
        /// Controller Reponsável por dar Manutenção na table Estado
        /// </summary>
        /// <param name="context"></param>
        public EstadoController(BancoSangueContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Metodo que retorna todo os Estados
        /// </summary>
        /// <returns>Lista de Estados</returns>
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Estado> GetEstado()
        {
            return _context.Estado;
        }

        // GET: api/Estado/5
        [HttpGet]
        [Route("GetById/{id:int}")]
        public async Task<IActionResult> GetEstado(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var estado = await _context.Estado.SingleOrDefaultAsync(m => m.Codigo == id);

            if (estado == null)
            {
                return NotFound();
            }

            return Ok(estado);
        }

        // PUT: api/Estado/5
        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> PutEstado([FromBody] Estado estado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Entry(estado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok(estado);
        }

        // POST: api/Estado
        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> PostEstado([FromBody] Estado estado)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Estado.Add(estado);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEstado", new { id = estado.Codigo }, estado);
        }

        // DELETE: api/Estado/5
        [HttpDelete]
        [Route("Remove")]
        public async Task<IActionResult> DeleteEstado(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var estado = await _context.Estado.SingleOrDefaultAsync(m => m.Codigo == id);
            if (estado == null)
            {
                return NotFound();
            }

            _context.Estado.Remove(estado);
            await _context.SaveChangesAsync();

            return Ok(estado);
        }

        private bool EstadoExists(int id)
        {
            return _context.Estado.Any(e => e.Codigo == id);
        }
    }
}