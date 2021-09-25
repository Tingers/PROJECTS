using System;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Usuario
    {
        //Construtor
        public Usuario() => CriadoEm = DateTime.Now;

        //Atributos ou propriedades
        [Key]
        public int Id { get; set; }
        public string Nickname { get; set; }
        public int Idade { get; set; }
        public string Pais { get; set; }
        public DateTime CriadoEm { get; set; }

        public override string ToString() =>
            $"Nick: {Nickname} | Idade: {Idade.ToString("C2")} | Criado em: {CriadoEm}";

    }
}