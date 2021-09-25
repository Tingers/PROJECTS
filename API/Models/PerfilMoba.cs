using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace API.Models
{
    public class PerfilMoba
    {
        //Construtor
        public PerfilMoba() => CriadoEm = DateTime.Now;

        //Atributos ou propriedades
        
        [Key]
        public int Id { get; set; }
        public Usuario usuario { get; set; } 
        public Jogo jogo { get; set; } 
        public string eloLOL { get; set; }
        public string champ { get; set; }
        public string laneMain { get; set; }
        public string laneSecundaria { get; set; }
        public DateTime CriadoEm { get; set; }

        public override string ToString() =>
            $"Id: {Id} | eloLOL: {eloLOL} | champ: {champ} | LaneMain: {laneMain} | LaneSecundaria: {laneSecundaria} | Criado em: {CriadoEm}";

    }
}