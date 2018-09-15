using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Model
{
    public class ImpedimentosTemp
    {
        public int Codigo { get; set; }
        public String Descricao { get; set; }
        public Doador Doador { get; set; }
        public int CodDoador { get; set; }
        public DateTime DtCadastro { get; set; }
    }
}
