﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Model
{
    public class Doador
    {
        [Key]
        public int Codigo { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public string Rg { get; set; }
        public string Telefone { get; set; }
        public DateTime DataNascimento { get; set; }
        public bool IsDoador { get; set; }
        public double Peso { get; set; }
        public TipoSanguineo TipoSanguineo { get; set; }
        public List<Endereco> Enderecos { get; set; }
        public int CodigoEndereco { get; set; }
        public SexoEnum Sexo { get; set; }
        //Mappings
    }

    public enum SexoEnum
    {
        Masculino = 1,
        Femenino = 2
    }
}
