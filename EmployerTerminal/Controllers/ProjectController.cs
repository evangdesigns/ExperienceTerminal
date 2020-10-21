using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EmployerTerminal.DataAccess;
using EmployerTerminal.Commands;

namespace EmployerTerminal.Controllers
{
    [Route("api/projects")]
    public class ProjectController : Controller
    {
        ProjectRepository _projectRepository;

        public ProjectController(ProjectRepository repository)
        {
            _projectRepository = repository;
        }

        // POST: api/projects/add
        [HttpPost("add")]
        public IActionResult AddProject(AddNewProjectCommand newProject)
        {
            var existingProject = _projectRepository.GetProjectIdByProjectName(newProject.Project_name);

            if (existingProject == null)
            {
                var createdProject = _projectRepository.AddNewProject(newProject);

                return Created("", createdProject);
            }
            else
            {
                return BadRequest("Project already exists.");
            }
        }

        // GET: api/projects
        [HttpGet]
        public IActionResult GetAllProjects()
        {
            var projects = _projectRepository.GetAllProjects();
            return Ok(projects);
        }

        // GET: api/projects/project-section/{titleId}
        [HttpGet("section/{sectionId}")]
        public IActionResult GetSkillsByTitle(int sectionId)
        {
            var projects = _projectRepository.GetProjectsBySectionId(sectionId);

            if (projects == null)
            {
                return NotFound("No projects by that Section Id.");
            }
            else
            {
                return Ok(projects);
            }
        }
        // GET: api/projects/project/{projectId}
        [HttpGet("project/{projectId}")]
        public IActionResult GetProjectById(int projectId)
        {
            var project = _projectRepository.GetProjectByProjectId(projectId);

            if (project == null)
            {
                return NotFound("No projects by that project Id.");
            }
            else
            {
                return Ok(project);
            }
        }
    }
}
