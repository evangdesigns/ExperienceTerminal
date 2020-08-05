using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EmployerTerminal.DataAccess;

namespace EmployerTerminal.Controllers
{
    [Route("api/project-section")]
    public class ProjectSectionController : Controller
    {
        ProjectSectionRepository _projectSectionRepository;

        public ProjectSectionController(ProjectSectionRepository repository)
        {
            _projectSectionRepository = repository;
        }

        // GET: api/project-section
        [HttpGet]
        public IActionResult GetAllProjectSections()
        {
            var projectSections = _projectSectionRepository.GetAllProjectSections();
            return Ok(projectSections);
        }

        // GET: api/project-section/title/{titleId}
        [HttpGet("title/{titleId}")]
        public IActionResult GetProjectSectionsByTitle(int titleId)
        {
            var projects = _projectSectionRepository.GetProjectSectionsByTitleId(titleId);

            if (projects == null)
            {
                return NotFound("No projects by that Title Id.");
            }
            else
            {
                return Ok(projects);
            }
        }
    }
}
