using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Model
{
    public class Municipio
    {
        public int Codigo { get; set; }
        public string Descricao { get; set; }
        public int Domicilios { get; set; }
        public int Populacao { get; set; }
        public double Pib { get; set; }
        public int CodigoEstado { get; set; }
        public Estado Estado { get; set; }
    }
}
