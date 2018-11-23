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
    [Route("api/Pedro")]
    public class PedroController : Controller
    {
        private readonly BancoSangueContext _context;

        public PedroController(BancoSangueContext context)
        {
            _context = context;
        }

        // GET: api/Pedro
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Pedro> GetPedro()
        {
            return _context.Pedro;
        }

        // GET: api/Pedro/5
        [HttpGet]
        [Route("GetById/{id:int}")]
        public async Task<IActionResult> GetPedro([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pedro = await _context.Pedro.SingleOrDefaultAsync(m => m.Codigo == id);

            if (pedro == null)
            {
                return NotFound();
            }

            return Ok(pedro);
        }

        // PUT: api/Pedro/5
        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> PutPedro([FromBody] Pedro pedro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            _context.Entry(pedro).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok(pedro);
        }

        // POST: api/Pedro
        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> PostPedro([FromBody] Pedro pedro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Pedro.Add(pedro);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPedro", new { id = pedro.Codigo }, pedro);
        }

        // DELETE: api/Pedro/5
        [HttpDelete]
        [Route("Remove")]
        public async Task<IActionResult> DeletePedro(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pedro = await _context.Pedro.SingleOrDefaultAsync(m => m.Codigo == id);
            if (pedro == null)
            {
                return NotFound();
            }

            _context.Pedro.Remove(pedro);
            await _context.SaveChangesAsync();

            return Ok(pedro);
        }

        private bool PedroExists(int id)
        {
            return _context.Pedro.Any(e => e.Codigo == id);
        }
    }
}