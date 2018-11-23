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
    [Route("api/Luana")]
    public class LuanaController : Controller
    {
        private readonly BancoSangueContext _context;

        public LuanaController(BancoSangueContext context)
        {
            _context = context;
        }

        // GET: api/Luana
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Luana> GetLuana()
        {
            return _context.Luana;
        }

        // GET: api/Luana/5
        [HttpGet]
        [Route("GetById/{id:int}")]
        public async Task<IActionResult> GetLuana([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var luana = await _context.Luana.SingleOrDefaultAsync(m => m.Codigo == id);

            if (luana == null)
            {
                return NotFound();
            }

            return Ok(luana);
        }

        // PUT: api/Luana/5
        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> PutLuana([FromBody] Luana luana)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            _context.Entry(luana).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok(luana);
        }

        // POST: api/Luana
        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> PostLuana([FromBody] Luana luana)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Luana.Add(luana);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLuana", new { id = luana.Codigo }, luana);
        }

        // DELETE: api/Luana/5
        [HttpDelete]
        [Route("Remove")]
        public async Task<IActionResult> DeleteLuana(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var luana = await _context.Luana.SingleOrDefaultAsync(m => m.Codigo == id);
            if (luana == null)
            {
                return NotFound();
            }

            _context.Luana.Remove(luana);
            await _context.SaveChangesAsync();

            return Ok(luana);
        }

        private bool LuanaExists(int id)
        {
            return _context.Luana.Any(e => e.Codigo == id);
        }
    }
}