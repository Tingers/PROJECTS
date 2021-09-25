using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using API.Data;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/jogo")]
    public class JogoController : ControllerBase
    {
  
        private readonly DataContext _context;

         public JogoController(DataContext context){
            _context = context;
        }

        // POST: api/jogo/criar
        [HttpPost]
        [Route("criar")]
        public Jogo create(Jogo jogo)
        {
            _context.jogos.Add(jogo);
            _context.SaveChanges();
            return jogo;
        }

        // GET: api/jogo/listar
        [HttpGet]
        [Route("listar")]
        public async Task<IActionResult> ListAsync() => Ok(await _context.jogos.ToListAsync());

       // GET: api/jogo/listarId/
        [HttpGet]
        [Route("listarId/{id}")]
        public async Task<IActionResult> GetByIdAsync([FromRoute] int id)
        {
            Jogo jogo = await _context.jogos.FindAsync(id);
            if (jogo != null)
            {
                return Ok(jogo);
            }
            return NotFound();
        }

        
        // DELETE: api/jogo/deletar
        [HttpDelete]
        [Route("deletar/{id}")]
        public async Task<IActionResult> DeleteAsync([FromRoute] string name)
        {
            
            Jogo jogo = _context.jogos.FirstOrDefault
            (
                jogo => jogo.Nome == name
            );
            _context.jogos.Remove(jogo);
            await _context.SaveChangesAsync();
            return Ok();
        }

         // PUT: api/jogo/editar
        [HttpPut]
        [Route("editar/{id}")]
        public async Task<IActionResult> UpdateAsync([FromBody] Jogo jogo)
        {
            _context.jogos.Update(jogo);
            await _context.SaveChangesAsync();
            return Ok();
        }
        
    }
}