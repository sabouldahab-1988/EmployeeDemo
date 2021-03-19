using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccessLayer.Services
{
    public class EmployeeServices
    {
        public List<Employee> GetEmployees()
        {
            var context = new SampleDBContext();
            List<Employee> employeesList = context.Employees.ToList();

            return employeesList;
        }
    }
}
