using System;
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
    [Route("api/Doador")]
    public class DoadorController : Controller
    {
        private readonly BancoSangueContext _context;

        public DoadorController(BancoSangueContext context)
        {
            _context = context;
        }

        // GET: api/Doador
        [HttpGet]
        public IEnumerable<Doador> GetDoador()
        {
            return _context.Doador;
        }

        // GET: api/Doador/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDoador([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var doador = await _context.Doador.SingleOrDefaultAsync(m => m.Codigo == id);

            if (doador == null)
            {
                return NotFound();
            }

            return Ok(doador);
        }

        // PUT: api/Doador/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoador([FromRoute] int id, [FromBody] Doador doador)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != doador.Codigo)
            {
                return BadRequest();
            }

            _context.Entry(doador).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DoadorExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Doador
        [HttpPost]
        public async Task<IActionResult> PostDoador([FromBody] Doador doador)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Doador.Add(doador);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDoador", new { id = doador.Codigo }, doador);
        }

        // DELETE: api/Doador/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoador([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var doador = await _context.Doador.SingleOrDefaultAsync(m => m.Codigo == id);
            if (doador == null)
            {
                return NotFound();
            }

            _context.Doador.Remove(doador);
            await _context.SaveChangesAsync();

            return Ok(doador);
        }

        private bool DoadorExists(int id)
        {
            return _context.Doador.Any(e => e.Codigo == id);
        }
    }
}