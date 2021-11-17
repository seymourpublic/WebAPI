using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;
namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"Select Username, Email, Password From dbo.Users";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Project2Con");
            SqlDataReader myReader;
            using(SqlConnection myCon=new SqlConnection(sqlDataSource))
            {

                myCon.Open();
                using (SqlCommand myCom = new SqlCommand(query, myCon))
                {
                    myReader = myCom.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();


                }


            }
            return new JsonResult(table);



        }

        [HttpPost]
        public JsonResult Post(Users user)
        {
            string query = @"
                            insert into dbo.Users (Username, Email, Password)
                                            values(
                                            '" + user.username + @"'
                                            ,'" + user.email +@"'
                                            ,'" + user.password +@"'
                )
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Project2Con");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added successfully");
        }

        
        [HttpPut]
        public JsonResult Put(Users user)
        {
            string query = @"
                            update dbo.Users set
                                            Email = '"+user.email+ @"'
                                            ,Username = '" + user.username + @"'
                                            ,Password = '" + user.password + @"'    
                                            where 
                                            Username = '" + user.username+@"'
                                    
                )
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Project2Con");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("updated successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(Users user)
        {
            string query = @"
                            delete from dbo.Users     
                                            where 
                                            Username = " + user.username + @"
                                    
                )
                ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Project2Con");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("updated successfully");
        }
    }
}
