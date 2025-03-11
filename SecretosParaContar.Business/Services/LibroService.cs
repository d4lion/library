using Microsoft.VisualBasic;
using SecretosParaContar.Business.interfaces;
using SecretosParaContar.Data.Models;
using System.Net;
using SecretosParaContar.Data;

namespace SecretosParaContar.Business.Service;

public class LibroService : ILibroService
{
    private readonly IUnitOfWork _unitOfWork;

    private List<Libros> _listaLibros = new();

    public LibroService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

public async Task<BaseMessage<Libros>> AddLibro (Libros libro)
 {
    var isValid = ValidateModel (libro);
    if (!string.IsNullOrEmpty (isValid))
    {
        return BuildResponse (null, isValid, HttpStatusCode.BadRequest, new());
    }

    try {
        await _unitOfWork.LibroRepository.AddAsync(libro);
        await _unitOfWork.SaveAsync();
    }
    catch (Exception ex) {
        return new BaseMessage<Libros>() {
            Message = $"[Exception]: {ex.Message}",
            StatusCode = System.Net.HttpStatusCode.InternalServerError,
            TotalElements = 0,
            ResponseElements = new ()
        };
    }
    return new BaseMessage<Libros>() {
        Message = "",
        StatusCode = System.Net.HttpStatusCode.OK,
        TotalElements = 1,
        ResponseElements = new List<Libros>{libro}
    };
 }

 public async Task<BaseMessage<Libros>> FindById(int id)  
 {
    Libros ? libro = new();
    libro = await _unitOfWork.LibroRepository.FindAsync(id);

    return libro != null ?
        BuildResponse (new List<Libros>(){libro}, "", HttpStatusCode.OK, 1):
        BuildResponse (new List<Libros>(), "", HttpStatusCode.NotFound, 0);
        
 }

public async Task<BaseMessage<Libros>> FindByName (string name)
{
    var lista = await _unitOfWork.LibroRepository.GetAllAsync(x => x.Name.ToLower().Contains(name.ToLower()));
    return lista.Any() ?  BuildResponse(lista.ToList(), "", HttpStatusCode.OK, lista.Count()) : 
            BuildResponse(lista.ToList(), "", HttpStatusCode.NotFound, 0);
}

public async Task<BaseMessage<Libros>> FindByPropesties (string name, int year)
    {
      var lista = await _unitOfWork.LibroRepository.GetAllAsync(x => x.Name.Contains(name) && x.Year == year);
        return lista.Any() ?  BuildResponse(lista.ToList(), "", HttpStatusCode.OK, lista.Count()) : 
            BuildResponse(lista.ToList(), "", HttpStatusCode.NotFound, 0);
    }

public async Task<BaseMessage<Libros>> GetList()
    {
        var lista = await _unitOfWork.LibroRepository.GetAllAsync();
        return lista.Any() ?  BuildResponse(lista.ToList(), "", HttpStatusCode.OK, lista.Count()) : 
            BuildResponse(lista.ToList(), "", HttpStatusCode.NotFound, 0);
    }

private BaseMessage<Libros> BuildResponse(List<Libros> lista, string message ="", HttpStatusCode status = HttpStatusCode.OK, int TotalElements =0)
{
    return new BaseMessage<Libros>(){
        Message = message,
        StatusCode = status,
        TotalElements = TotalElements,
        ResponseElements = lista
    };
}

private string ValidateModel(Libros libro) {
    string message = string.Empty;
    if (string.IsNullOrEmpty(libro.Name))
    {
        message += "El nombre es requerido";
    }
    if (libro.Year <1901 || libro.Year > DateAndTime.Now.Year)
    {
        message += "El año del libro debe de estar entre 1901 y 2025";
    }
    return message;
}

#region Learning to TEst
    public async Task<string> HealthCheckTest()
    {
        return "OK";
    }

    public async Task<string> HealthCheckTest(bool IsOK)
    {
        return IsOK ? "OK!" : "Not cool";
    }

    public async Task<string> TestAlbumCreation(Libros libro)
    {
        return ValidateModel(libro);
    }
#endregion


}