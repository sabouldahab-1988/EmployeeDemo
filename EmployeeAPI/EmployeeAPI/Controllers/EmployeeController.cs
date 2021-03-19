using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using DataAccessLayer.Models;
using DataAccessLayer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace EmployeeAPI.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        EmployeeServices employeeService = new EmployeeServices();
        [HttpGet]
        [Route("EmployeeController/getEmployees")]
        public IActionResult GetEmployees()
        {
            try
            {
                List<Employee> employees= employeeService.GetEmployees();
                return new ObjectResult(employees)
                {
                    StatusCode = Microsoft.AspNetCore.Http.StatusCodes.Status200OK
                };

            }
            catch (Exception ex)
            {
                return new ObjectResult(ex)
                {
                    StatusCode = Microsoft.AspNetCore.Http.StatusCodes.Status500InternalServerError
                };
            }
        }
    }
}