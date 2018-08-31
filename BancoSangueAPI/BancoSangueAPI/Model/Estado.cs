using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Model
{
    public class Estado
    {
        public int Codigo { get; set; }
        public string Descricao { get; set; }
        public string Sigla { get; set; }
        public DateTime DataRegistro { get; set; }
        public DateTime DataAtualizacao { get; set; }
    }
}
