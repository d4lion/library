using SecretosParaContar.Data.Models;

namespace SecretosParaContar.Data;

public interface IUnitOfWork
{
    IRepository<int, Autor> AutorRepository { get; }
    IRepository<int, Libros> LibroRepository { get; }

    Task SaveAsync();
}
