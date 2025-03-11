using SecretosParaContar.Data.Models;

namespace SecretosParaContar.Business.interfaces;

public interface ILibroService
{

    Task<BaseMessage<Libros>> GetList ();

    Task<BaseMessage<Libros>> AddLibro (Libros libro);

    Task<BaseMessage<Libros>> FindById(int id);

    Task<BaseMessage<Libros>> FindByName(string name);

    Task<BaseMessage<Libros>> FindByPropesties (string name, int year);

     #region Learning to Test
    Task<string> HealthCheckTest();
    Task<string> TestAlbumCreation(Libros libro);
    
    #endregion

    
}