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
    [Route("api/perfilMoba")]
    public class PerfilMobaController : ControllerBase
    {
  
        private readonly DataContext _context;

         public PerfilMobaController(DataContext context){
            _context = context;
        }

        // POST: api/perfilMoba/criar
        [HttpPost]
        [Route("criar")]
        public PerfilMoba create(PerfilMoba perfilMoba)
        {
            _context.perfils.Add(perfilMoba);
             _context.SaveChanges();
            return perfilMoba;
        }

        // GET: api/perfilMoba/listar
        [HttpGet]
        [Route("listar")]
        public async Task<IActionResult> ListAsync() => Ok(await _context.perfils.ToListAsync());

        // GET: api/perfilMoba/listarId/
        [HttpGet]
        [Route("listarId/{Id}")]
        public async Task<IActionResult> GetByIdAsync([FromRoute] int id)
        {
            PerfilMoba perfilMoba = await _context.perfils.FindAsync(id);
            if (perfilMoba != null)
            {
                return Ok(perfilMoba);
            }
            return NotFound();
        }

    }
}
