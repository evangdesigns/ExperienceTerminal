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
    public class ProjectSectionRepository
    {
        readonly string ConnectionString;
        public ProjectSectionRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("EmployerTerminal");
        }

        public List<ProjectSection> GetAllProjectSections()
        {
            var sql = "select * from project_section_table";

            using (var db = new SqlConnection(ConnectionString))
            {
                var projectSections = db.Query<ProjectSection>(sql).ToList();
                return projectSections;
            }
        }

        public List<ProjectSection> GetProjectSectionsByTitleId(int titleId)
        {
            var sql = "select * from project_section_table where title_id = @titleId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { TitleId = titleId };
                var projectSections = db.Query<ProjectSection>(sql,parameters).ToList();
                return projectSections;
            }
        }
    }
}
