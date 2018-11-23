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
    [Route("api/Zils")]
    public class ZilsController : Controller
    {
        private readonly BancoSangueContext _context;

        public ZilsController(BancoSangueContext context)
        {
            _context = context;
        }

        // GET: api/Zils
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Zils> GetZils()
        {
            return _context.Zils;
        }

        // GET: api/Zils/5
        [HttpGet]
        [Route("GetById/{id:int}")]
        public async Task<IActionResult> GetZils([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var zils = await _context.Zils.SingleOrDefaultAsync(m => m.Codigo == id);

            if (zils == null)
            {
                return NotFound();
            }

            return Ok(zils);
        }

        // PUT: api/Zils/5
        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> PutZils([FromBody] Zils zils)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            _context.Entry(zils).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok(zils);
        }

        // POST: api/Zils
        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> PostZils([FromBody] Zils zils)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Zils.Add(zils);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetZils", new { id = zils.Codigo }, zils);
        }

        // DELETE: api/Zils/5
        [HttpDelete]
        [Route("Remove")]
        public async Task<IActionResult> DeleteZils(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var zils = await _context.Zils.SingleOrDefaultAsync(m => m.Codigo == id);
            if (zils == null)
            {
                return NotFound();
            }

            _context.Zils.Remove(zils);
            await _context.SaveChangesAsync();

            return Ok(zils);
        }

        private bool ZilsExists(int id)
        {
            return _context.Zils.Any(e => e.Codigo == id);
        }
    }
}