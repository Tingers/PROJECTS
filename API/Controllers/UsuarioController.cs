using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using API.Models;
using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/usuario")]
    public class UsuarioController : ControllerBase
    {
  
        private readonly DataContext _context;

         public UsuarioController(DataContext context){
            _context = context;
        }

        // POST: api/usuario/criar
        [HttpPost]
        [Route("criar")]
        public Usuario create(Usuario usuario)
        {
            _context.usuarios.Add(usuario);
            _context.SaveChanges();
            return usuario;
        }

        // GET: api/usuario/listar
        [HttpGet]
        [Route("listar")]
        public async Task<IActionResult> ListAsync() => Ok(await _context.usuarios.ToListAsync());

       // GET: api/usuario/listarId/
        [HttpGet]
        [Route("listarId/{Id}")]
        public async Task<IActionResult> GetByIdAsync([FromRoute] int id)
        {
            Usuario usuario = await _context.usuarios.FindAsync(id);
            if (usuario != null)
            {
                return Ok(usuario);
            }
            return NotFound();
        }

        
        // DELETE: api/usuario/deletar
        [HttpDelete]
        [Route("deletar/{Id}")]
        public async Task<IActionResult> DeleteAsync([FromRoute] int Id)
        {
            
            Usuario usuario = _context.usuarios.FirstOrDefault
            (
                usuario => usuario.Id == Id
            );
            _context.usuarios.Remove(usuario);
            await _context.SaveChangesAsync();
            return Ok();
        }

         // PUT: api/usuario/editar
        [HttpPut]
        [Route("editar/{Id}")]
        public async Task<IActionResult> UpdateAsync([FromRoute] int Id)
        {
                Usuario usuario = _context.usuarios.FirstOrDefault
                (
                    usuario => usuario.Id == Id
                );
               _context.usuarios.Update(usuario);
               await _context.SaveChangesAsync();
               return Ok();
            
        }
    }
}
