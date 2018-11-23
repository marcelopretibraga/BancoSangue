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
    [Route("api/Felipe")]
    public class FelipeController : Controller
    {
        private readonly BancoSangueContext _context;

        public FelipeController(BancoSangueContext context)
        {
            _context = context;
        }

        // GET: api/Felipe
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Felipe> GetFelipe()
        {
            return _context.Felipe;
        }

        // GET: api/Felipe/5
        [HttpGet]
        [Route("GetById/{id:int}")]
        public async Task<IActionResult> GetFelipe([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var felipe = await _context.Felipe.SingleOrDefaultAsync(m => m.Codigo == id);

            if (felipe == null)
            {
                return NotFound();
            }

            return Ok(felipe);
        }

        // PUT: api/Felipe/5
        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> PutFelipe([FromBody] Felipe felipe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Entry(felipe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok(felipe);
        }

        // POST: api/Felipe
        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> PostFelipe([FromBody] Felipe felipe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Felipe.Add(felipe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFelipe", new { id = felipe.Codigo }, felipe);
        }

        // DELETE: api/Felipe/5
        [HttpDelete]
        [Route("Remove")]
        public async Task<IActionResult> DeleteFelipe(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var felipe = await _context.Felipe.SingleOrDefaultAsync(m => m.Codigo == id);
            if (felipe == null)
            {
                return NotFound();
            }

            _context.Felipe.Remove(felipe);
            await _context.SaveChangesAsync();

            return Ok(felipe);
        }

        private bool FelipeExists(int id)
        {
            return _context.Felipe.Any(e => e.Codigo == id);
        }
    }
}