using System;
using System.ComponentModel.DataAnnotations.Schema;


namespace SecretosParaContar.Data.Models;

public class Libros: BaseEntity<int>
{
    public string Name {get; set;} = String.Empty;

    public int Year {get; set;}

    public Genre Genre {get; set;} = Genre.Unknown;
    [ForeignKey ("Autor")]

    public int AutorId {get; set;}

    public virtual Autor? Autor {get; set;}
}

public enum Genre
{
    LiteraturaInfantil,
    CuentosPopulares,
    Poesia,
    Educacion,
    Cultura,
    Unknown,

}