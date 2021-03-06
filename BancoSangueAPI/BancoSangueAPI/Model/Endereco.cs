﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Model
{
    public class Endereco
    {
        public int Codigo { get; set; }
        public string Logradouro { get; set; }
        public int Numero { get; set; }
        public string Complemento { get; set; }
        public string Bairro { get; set; }
        public int Cep { get; set; }
        public int CodigoMunicipio { get; set; }
        public Municipio Municipio { get; set; }
    }
}
