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
    public class SkillRepository
    {
        readonly string ConnectionString;
        public SkillRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("EmployerTerminal");
        }

        public List<Skill> GetAllSkills()
        {
            var sql = "select * from skills_table";

            using (var db = new SqlConnection(ConnectionString))
            {
                var skills = db.Query<Skill>(sql).ToList();
                return skills;
            }
        }

        public List<Skill> GetSkillsByTitle(int titleId)
        {
            var sql = @"SELECT 
            skills_table.skill_id,
            skills_table.skill_name,
            skills_table.skill_icon
            FROM title_skills_table
            JOIN skills_table ON skills_table.skill_id = title_skills_table.skill_id 
            JOIN title_table ON title_table.title_id = title_skills_table.title_id
            WHERE title_skills_table.title_id = @titleId
            ";

            var parameters = new
            {
                TitleId = titleId
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var skills = db.Query<Skill>(sql, parameters).ToList();
                return skills;
            }
        }

        public List<Skill> GetSkillsByProjectSection(int projectSectionId)
        {
            var sql = @"SELECT 
            skills_table.skill_id,
            skills_table.skill_name,
            skills_table.skill_icon
            FROM project_skills_table
            JOIN skills_table ON skills_table.skill_id = project_skills_table.skill_id 
            JOIN project_section_table ON project_section_table.project_section_id = project_skills_table.project_section_id
            WHERE project_skills_table.project_section_id = @projectSectionId
            ";

            var parameters = new
            {
                ProjectSectionId = projectSectionId
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var skills = db.Query<Skill>(sql, parameters).ToList();
                return skills;
            }
        }

    }
}
