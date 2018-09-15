using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Model
{
    public class IntervaloDoacao
    {
        public int Codigo { get; set; }
        public Doador Doador { get; set; }
        public int CodigoDoador { get; set; }
        public DateTime DataUltimaDoacao { get; set; }
        public PontoColeta PontoColeta { get; set; }
        public int CodigoPontoColeta { get; set; }
    }
}
