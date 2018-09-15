using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BancoSangueAPI.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BancoSangueAPI.Controllers
{
    public class ImpedimentosTempController : Controller
    {
        private readonly BancoSangueContext _context;
        /// <summary>
        /// Controller Reponsável por dar Manutenção na table ImpedimentosTemp
        /// </summary>
        /// <param name="context"></param>
        public ImpedimentosTempController(BancoSangueContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Metodo que retorna todo os ImpedimentosTemp
        /// </summary>
        /// <returns>Lista de Estados</returns>
        [HttpGet]
        public IEnumerable<ImpedimentosTemp> GetImpedimentosTemp()
        {
            return _context.ImpedimentosTemp;
        }

        // GET: api/ImpedimentosTemp/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetImpedimentosTemp([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var impedimentoTemp = await _context.ImpedimentosTemp.SingleOrDefaultAsync(i => i.Codigo == id);

            if (impedimentoTemp == null)
            {
                return NotFound();
            }

            return Ok(impedimentoTemp);
        }

        private bool impedimentoTempExists(int id)
        {
            return _context.ImpedimentosTemp.Any(i => i.Codigo == id);
        }

        // PUT: api/ImpedimentosTemp/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutImpedimentosTemp([FromRoute] int id, [FromBody] ImpedimentosTemp impedimentoTemp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != impedimentoTemp.Codigo)
            {
                return BadRequest();
            }

            _context.Entry(impedimentoTemp).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!impedimentoTempExists(id))
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

        // POST: api/ImpedimentosTemp
        [HttpPost]
        public async Task<IActionResult> PostImpedimentosTemp([FromBody] ImpedimentosTemp impedimentoTemp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ImpedimentosTemp.Add(impedimentoTemp);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetImpedimentosTemp", new { id = impedimentoTemp.Codigo }, impedimentoTemp);
        }

        // DELETE: api/ImpedimentosTemp/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteImpedimentosTemp([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var impedimentoTemp = await _context.ImpedimentosTemp.SingleOrDefaultAsync(i => i.Codigo == id);
            if (impedimentoTemp == null)
            {
                return NotFound();
            }

            _context.ImpedimentosTemp.Remove(impedimentoTemp);
            await _context.SaveChangesAsync();

            return Ok(impedimentoTemp);
        }

    }
}