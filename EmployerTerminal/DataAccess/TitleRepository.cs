using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using EmployerTerminal.Models;
using System.Data.SqlClient;
using Dapper;

namespace EmployerTerminal.DataAccess
{
    public class TitleRepository
    {
        readonly string ConnectionString;
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

        public Title GetTitle(int id)
        {
            var sql = "select * from title_table WHERE title_id = @id";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameter = new {Id = id};
                var title = db.QueryFirst<Title>(sql, parameter);
                return title;
            }
        }

        public int GetTitleId(string title)
        {
            var sql = "SELECT title_id FROM title_table WHERE title_name = @title";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameter = new { Title = title };

                var titleId = db.QueryFirst<int>(sql, parameter);
                return titleId;
            }
        }
    }
}
