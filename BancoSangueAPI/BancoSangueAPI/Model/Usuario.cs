using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BancoSangueAPI.Model
{
    public class Usuario
    {
        public int Codigo { get; set; }
        public String Login { get; set; }
        public String Senha { get; set; }
        public String Email { get; set; }
    }
}
