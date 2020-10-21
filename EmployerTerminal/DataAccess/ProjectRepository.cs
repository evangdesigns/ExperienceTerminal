using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using EmployerTerminal.Commands;
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

        public Project AddNewProject(AddNewProjectCommand newProject)
        {
            var sql = @"INSERT INTO [project_table](project_section_id, project_name, project_description, project_image_url, project_url, project_git_url)
                      output inserted.*
                      VALUES (@Project_section_id, @Project_name, @Project_description, @Project_image_url, @Project_url, @Project_git_url);";

            using (var db = new SqlConnection(ConnectionString))
            {

                var parameters = new
                {
                    newProject.Project_section_id,
                    newProject.Project_name,
                    newProject.Project_description,
                    newProject.Project_image_url,
                    newProject.Project_url,
                    newProject.Project_git_url
                };

                var result = db.QueryFirstOrDefault<Project>(sql, parameters);
                return result;
            }
        }

        public int? GetProjectIdByProjectName(string project_name)
        {
            var sql = "SELECT project_id FROM [project_table] WHERE project_name = @Project_name";

            var parameters = new
            {
                Project_name = project_name
            };

            using (var db = new SqlConnection(ConnectionString))
            {

                var result = db.QueryFirstOrDefault<int>(sql, parameters);

                if (result != 0)
                {
                    return result;
                }
                else
                {
                    return null;
                }
            }

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
