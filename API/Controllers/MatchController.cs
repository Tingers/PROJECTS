using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using API.Models;
using API.Data;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/match")]
    public class MatchController : ControllerBase
    {

        private readonly DataContext _context;

        public MatchController(DataContext context)
        {
            _context = context;
        }

        // GET: api/perfilMoba/listarId/
        [HttpGet]
        [Route("getById/{Id}")]
        public async Task<IActionResult> GetByIdAsync([FromRoute] int id)
        {
            return Ok(await _context.perfils
                .Include(Perfil => Perfil.usuario)
                .Where(Perfil => Perfil.idUsuario == id).ToListAsync());
        }

        // GET: api/perfilMoba/listarId/
        [HttpGet]
        [Route("getAll/{eloLOL}")]
        public async Task<IActionResult> GetAllAsync([FromRoute] String eloLOL)
        {
            return Ok(await _context.perfils
                .Include(Perfil => Perfil.usuario)
                .Where(Perfil => Perfil.eloLOL == eloLOL).ToListAsync());
        }
        
    }
}