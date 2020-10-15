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
    public class ProjectRepository
    {
        readonly string ConnectionString;
        public ProjectRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("EmployerTerminal");
        }

        public List<Project> GetAllProjects()
        {
            var sql = "select * from project_table";

            using (var db = new SqlConnection(ConnectionString))
            {
                var projects = db.Query<Project>(sql).ToList();
                return projects;
            }
        }

        public List<Project> GetProjectsBySectionId(int sectionId)
        {
            var sql = "SELECT * FROM project_table WHERE project_section_id = @sectionId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { SectionId = sectionId };

                var projects = db.Query<Project>(sql, parameters).ToList();
                return projects;
            }
        }

        public Project GetProjectByProjectId(int projectId)
        {
            var sql = "SELECT * FROM project_table WHERE project_id = @projectId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { ProjectId = projectId };

                var project = db.QueryFirst<Project>(sql, parameters);
                return project;
            }
        }
    }
}
