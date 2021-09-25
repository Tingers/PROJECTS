using System;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Jogo
    {
        //Construtor
        public Jogo() => CriadoEm = DateTime.Now;

        //Atributos ou propriedades
        // [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Genero { get; set; }
        public string Plataforma { get; set; }
        public DateTime CriadoEm { get; set; }

        public override string ToString() =>
            $"Nome: {Nome} | Genero: {Genero} | Plataforma: {Plataforma} | Criado em: {CriadoEm}";

    }
}