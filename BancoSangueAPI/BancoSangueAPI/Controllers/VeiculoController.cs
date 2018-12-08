﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BancoSangueAPI.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BancoSangueAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Veiculo")]
    public class VeiculoController : Controller
    {
        private readonly BancoSangueContext _context;

        public VeiculoController(BancoSangueContext context)
        {
            _context = context;
        }


        // GET: api/Cor
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Veiculo> GetVeiculo()
        {
            return _context.Veiculo;
        }

        // GET: api/Cor/5
        [HttpGet]
        [Route("GetById/{id:int}")]
        public async Task<IActionResult> GetVeiculo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var veiculo = await _context.Veiculo.SingleOrDefaultAsync(m => m.Codigo == id);

            if (veiculo == null)
            {
                return NotFound();
            }

            return Ok(veiculo);
        }

        // PUT: api/Cor/5
        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> PutVeiculo([FromBody] Veiculo veiculo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Entry(veiculo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok(veiculo);
        }

        // POST: api/Cor
        [HttpPost]
        [Route("Save")]
        public async Task<IActionResult> PostVeiculo([FromBody] Veiculo veiculo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Veiculo.Add(veiculo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCor", new { id = veiculo.Codigo }, veiculo);
        }

        // DELETE: api/Cor/5
        [HttpDelete]
        [Route("Remove")]
        public async Task<IActionResult> DeleteVeiculo(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var veiculo = await _context.Veiculo.SingleOrDefaultAsync(m => m.Codigo == id);
            if (veiculo == null)
            {
                return NotFound();
            }

            _context.Veiculo.Remove(veiculo);
            await _context.SaveChangesAsync();

            return Ok(veiculo);
        }

        private bool VeiculoExists(int id)
        {
            return _context.Veiculo.Any(e => e.Codigo == id);
        }
    }
}