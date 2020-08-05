using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EmployerTerminal.DataAccess;

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
    }
}
