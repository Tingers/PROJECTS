using System;

namespace API.Models
{
    public class PerfilMoba
    {
        //Construtor
        public PerfilMoba() => CriadoEm = DateTime.Now;

        //Atributos ou propriedades
        public int Id { get; set; }
        public string eloLOL { get; set; }
        public string champ { get; set; }
        public string laneMain { get; set; }
        public string laneSecundaria { get; set; }
        public DateTime CriadoEm { get; set; }

        public override string ToString() =>
            $"Id: {Id} | Criado em: {CriadoEm}";

    }
}