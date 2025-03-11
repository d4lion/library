using System.Linq.Expressions;
using SecretosParaContar.Data.Models;

namespace SecretosParaContar.Data;

public interface IRepository<TId, TEntity>

where TId: struct
where TEntity : BaseEntity<TId>
{
    Task AddAsync (TEntity entity);

    Task<TEntity> FindAsync (TId id);

    Task Update (TEntity entity);

    Task Delete (TEntity id);

    Task Delete (TId id);

    Task<IEnumerable<TEntity>> GetAllAsync (
        Expression<Func<TEntity, bool>> filter = null,

        Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
        string includeProperties = ""
    );
}