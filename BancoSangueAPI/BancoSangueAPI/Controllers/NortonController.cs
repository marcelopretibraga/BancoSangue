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
    [Route("api/Norton")]
    public class NortonController : Controller
    {
        private readonly BancoSangueContext _context;

        public NortonController(BancoSangueContext context)
        {
            _context = context;
        }

        // GET: api/Norton
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Norton> GetNorton()
        {
            return _context.Norton;
        }

        // GET: api/Norton/5
        [HttpGet]
        [Route("GetById/{id:int}")]
        public async Task<IActionResult> GetNorton([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var norton = await _context.Norton.SingleOrDefaultAsync(m => m.Codigo == id);

            if (norton == null)
            {
                return NotFound();
            }

            return Ok(norton);
        }

        // PUT: api/Norton/5
        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> PutNorton([FromBody] Norton norton)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            _context.Entry(norton).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok(norton);
        }

        // POST: api/Norton
        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> PostNorton([FromBody] Norton norton)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Norton.Add(norton);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNorton", new { id = norton.Codigo }, norton);
        }

        // DELETE: api/Norton/5
        [HttpDelete]
        [Route("Remove")]
        public async Task<IActionResult> DeleteNorton(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var norton = await _context.Norton.SingleOrDefaultAsync(m => m.Codigo == id);
            if (norton == null)
            {
                return NotFound();
            }

            _context.Norton.Remove(norton);
            await _context.SaveChangesAsync();

            return Ok(norton);
        }

        private bool NortonExists(int id)
        {
            return _context.Norton.Any(e => e.Codigo == id);
        }
    }
}