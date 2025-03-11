using Microsoft.AspNetCore.Mvc;
using SecretosParaContar.Business.interfaces;
using SecretosParaContar.Business.Service;
using SecretosParaContar.Data.Models;
using SecretosParaContar.Data;

namespace SecretosParaContar.API.Controller

{
    [Route("Api/[controller]")]
    [ApiController]

    public class LibrosController : ControllerBase

    {
        private readonly ILibroService _libroService;

        public LibrosController(ILibroService libroService)
        {
            _libroService = libroService;
        }
        [HttpGet]
        [Route("GetAllLibros")]
        
        public async Task<IActionResult> GetLibros()
        {
            var libros = await _libroService.GetList();
            return Ok(libros);
        }
        
        [HttpPost]
        [Route("AddLibros")]
        
        public async Task<IActionResult> AddLibros(Libros libro)
        {
            var result = await _libroService.AddLibro(libro);
            return Ok(result);
        }

        [HttpGet("GetLibrosName")]
        
        public async Task<IActionResult> GetLibrosName(string name)
        {
            var result = await _libroService.FindByName(name);

            return result.TotalElements > 0 ?
            Ok(result) :
            NotFound(result);
        }

    }
}


