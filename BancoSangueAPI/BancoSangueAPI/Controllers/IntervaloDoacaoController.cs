using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BancoSangueAPI.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BancoSangueAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/IntervaloDoacao")]
    public class IntervaloDoacaoController : Controller
    {
        private readonly BancoSangueContext _context;
        /// <summary>
        /// Controller Reponsável por dar Manutenção na table Intervalo de Doacao
        /// </summary>
        /// <param name="context"></param>
        public IntervaloDoacaoController(BancoSangueContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Metodo que retorna todos os Intervalos de Doacao
        /// </summary>
        /// <returns>Lista de Intervalos de Doacao</returns>
        [HttpGet]
        public IEnumerable<IntervaloDoacao> GetIntervaloDoacaos()
        {
            return _context.IntervaloDoacao;
        }

        // GET: api/IntervaloDoacao/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetIntervaloDoacao([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var intervaloDoacao = await _context.Estado.SingleOrDefaultAsync(m => m.Codigo == id);

            if (intervaloDoacao == null)
            {
                return NotFound();
            }

            return Ok(intervaloDoacao);
        }

        // PUT: api/IntervaloDoacao/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIntervaloDoacao([FromRoute] int id, [FromBody] IntervaloDoacao intervaloDoacao)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != intervaloDoacao.Codigo)
            {
                return BadRequest();
            }

            _context.Entry(intervaloDoacao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IntervaloDoacaoExists(id))
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

        // POST: api/IntervaloDoacao
        [HttpPost]
        public async Task<IActionResult> PostIntervaloDoacao([FromBody] IntervaloDoacao intervaloDoacao)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.IntervaloDoacao.Add(intervaloDoacao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIntervaloDoacao", new { id = intervaloDoacao.Codigo }, intervaloDoacao);
        }

        // DELETE: api/IntervaloDoacao/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIntervaloDoacao([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var intervaloDoacao = await _context.IntervaloDoacao.SingleOrDefaultAsync(i => i.Codigo == id);
            if (intervaloDoacao == null)
            {
                return NotFound();
            }

            _context.IntervaloDoacao.Remove(intervaloDoacao);
            await _context.SaveChangesAsync();

            return Ok(intervaloDoacao);
        }

        private bool IntervaloDoacaoExists(int id)
        {
            return _context.IntervaloDoacao.Any(i => i.Codigo == id);
        }
    }
}