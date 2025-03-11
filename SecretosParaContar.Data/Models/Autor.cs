using System.Reflection.Metadata.Ecma335;
using SecretosParaContar.Data.Models;

namespace SecretosParaContar.Data.Models;

public class Autor : BaseEntity<int>
{

    public string name { get; set; } = string.Empty;

    public string Label { get; set; } = string.Empty;

    public bool IsOnTour { get; set; }
}