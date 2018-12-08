using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Model
{
    public class Veiculo
    {
        public int Codigo { get; set; }
        public string Nr_placa { get; set; }
        public int Nr_ano { get; set; }
        public int Nr_modelo { get; set; }
        public int Cd_cor { get; set; }
        public string Nr_chassi { get; set; }
        public int Nr_passageiros { get; set; }
        public int Nr_portas { get; set; }
        public DateTime Dt_registro { get; set; }
        public Cor Cor_veiculo { get; set; }
    }
}
