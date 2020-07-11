using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using EmployerTerminal.Models;
using System.Data.SqlClient;

namespace EmployerTerminal.DataAccess
{
    public class TitleRepository
    {
        string ConnectionString;
        public TitleRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("EmployerTerminal");
        }

        public List<Title> GetAllTitles()
        {
            var sql = "select * from title_table";

            using (var db = new SqlConnection(ConnectionString))
            {
                var titles = db.Query<Title>(sql).ToList();
                return titles;
            }
        }
    }
}
