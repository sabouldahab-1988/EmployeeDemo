using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccessLayer.Services
{
    public class EmployeeServices
    {
        /// <summary>
        /// Get all employees data from the database
        /// </summary>
        /// <returns>List<Employees></returns>
        public List<Employee> GetEmployees()
        {
            var context = new SampleDBContext();
            List<Employee> employeesList = context.Employees.ToList();

            return employeesList;
        }

        public void DeleteEmployee(int employeeId)
        {
            using (var context = new SampleDBContext())
            {
                var emp = context.Employees.Where(e=>e.Id==employeeId).FirstOrDefault();
                context.Employees.Remove(emp);
                context.SaveChanges();
            }
        }
    }
}
