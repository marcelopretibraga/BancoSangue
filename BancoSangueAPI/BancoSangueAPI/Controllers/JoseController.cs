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
    [Route("api/Jose")]
    public class JoseController : Controller
    {
        private readonly BancoSangueContext _context;

        public JoseController(BancoSangueContext context)
        {
            _context = context;
        }

        // GET: api/Jose
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Jose> GetJose()
        {
            return _context.Jose;
        }

        // GET: api/Jose/5
        [HttpGet]
        [Route("GetById/{id:int}")]
        public async Task<IActionResult> GetJose([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var jose = await _context.Jose.SingleOrDefaultAsync(m => m.Codigo == id);

            if (jose == null)
            {
                return NotFound();
            }

            return Ok(jose);
        }

        // PUT: api/Jose/5
        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> PutJose([FromBody] Jose jose)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            _context.Entry(jose).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok(jose);
        }

        // POST: api/Jose
        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> PostJose([FromBody] Jose jose)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Jose.Add(jose);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJose", new { id = jose.Codigo }, jose);
        }

        // DELETE: api/Jose/5
        [HttpDelete]
        [Route("Remove")]
        public async Task<IActionResult> DeleteJose(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var jose = await _context.Jose.SingleOrDefaultAsync(m => m.Codigo == id);
            if (jose == null)
            {
                return NotFound();
            }

            _context.Jose.Remove(jose);
            await _context.SaveChangesAsync();

            return Ok(jose);
        }

        private bool JoseExists(int id)
        {
            return _context.Jose.Any(e => e.Codigo == id);
        }
    }
}