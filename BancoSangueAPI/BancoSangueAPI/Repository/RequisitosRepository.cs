using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BancoSangueAPI.Model;

namespace BancoSangueAPI.Repository
{
    public class RequisitosRepository : IRequisitosRepository
    
{
          private readonly BancoSangueContext _context;

    public RequisitosRepository(BancoSangueContext context)
    {
        _context = context;
    }

        public void Delete(int codigo)
        {
            var requisitosRemover = _context.Requisitos.Where(r =>r.Codigo == codigo).FirstOrDefault();
            _context.Requisitos.Remove(requisitosRemover);
            _context.SaveChanges();
        }

        public void Delete(RequisitosBasicos requisitos)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
          
        }

        public List<RequisitosBasicos> GetAll() =>
            _context.Requisitos.ToList();

        public RequisitosBasicos GetById(int id) =>
            _context.Requisitos.Where(r => r.Codigo == id).FirstOrDefault();

        public void Save(RequisitosBasicos requisitosBasicos)
        {
            _context.Requisitos.Add(requisitosBasicos);
            _context.SaveChanges();
        }

        public void Update(RequisitosBasicos requisitosBasicos)
        {
            _context.Requisitos.Update(requisitosBasicos);
            _context.SaveChanges();
        }
    }
}
