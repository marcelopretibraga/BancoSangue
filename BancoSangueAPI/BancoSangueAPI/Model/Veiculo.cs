using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Model
{
    public class Veiculo
    {
        public int Codigo { get; set; }
        public string Placa { get; set; }
        public int Ano { get; set; }
        public int Modelo { get; set; }
        public Cor Cor { get; set; }
        public string Chassi { get; set; }
        public int Passageiros { get; set; }
        public int Portas { get; set; }
        public DateTime Registro { get; set; }
        public int codigoCor { get; set; }
    }
}
