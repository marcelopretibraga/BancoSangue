using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Model
{
    public class PontoColeta
    {
        public int Codigo { get; set; }
        public string Descricao { get; set; }
        public Endereco Endereco{ get; set; }
        public int CodigoEndereco { get; set; }
    }
}
