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
    [Route("api/Matheus")]
    public class MatheusController : Controller
    {
        private readonly BancoSangueContext _context;

        public MatheusController(BancoSangueContext context)
        {
            _context = context;
        }

        // GET: api/Matheus
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Matheus> GetMatheus()
        {
            return _context.Matheus;
        }

        // GET: api/Matheus/5
        [HttpGet]
        [Route("GetById/{id:int}")]
        public async Task<IActionResult> GetMatheus([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var matheus = await _context.Matheus.SingleOrDefaultAsync(m => m.Codigo == id);

            if (matheus == null)
            {
                return NotFound();
            }

            return Ok(matheus);
        }

        // PUT: api/Matheus/5
        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> PutMatheus([FromBody] Matheus matheus)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
           
            _context.Entry(matheus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok(matheus);
        }

        // POST: api/Matheus
        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> PostMatheus([FromBody] Matheus matheus)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Matheus.Add(matheus);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMatheus", new { id = matheus.Codigo }, matheus);
        }

        // DELETE: api/Matheus/5
        [HttpDelete]
        [Route("Remove")]
        public async Task<IActionResult> DeleteMatheus(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var matheus = await _context.Matheus.SingleOrDefaultAsync(m => m.Codigo == id);
            if (matheus == null)
            {
                return NotFound();
            }

            _context.Matheus.Remove(matheus);
            await _context.SaveChangesAsync();

            return Ok(matheus);
        }

        private bool MatheusExists(int id)
        {
            return _context.Matheus.Any(e => e.Codigo == id);
        }
    }
}