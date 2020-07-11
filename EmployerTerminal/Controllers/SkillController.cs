using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EmployerTerminal.DataAccess;

namespace EmployerTerminal.Controllers
{
    [Route("api/skills")]
    [ApiController]
    public class SkillController : ControllerBase
    {
        SkillRepository _skillRepository;

        public SkillController(SkillRepository repository)
        {
            _skillRepository = repository;
        }
        // GET: api/skills
        [HttpGet]
        public IActionResult GetAllSkills()
        {
            var skills = _skillRepository.GetAllSkills();
            return Ok(skills);
        }
        // GET: api/skills/title/{titleId}
        [HttpGet("title/{titleId}")]
        public IActionResult GetSkillsByTitle(int titleId)
        {
            var skillsByTitle = _skillRepository.GetSkillsByTitle(titleId);

            if (skillsByTitle == null)
            {
                return NotFound("No skills by that title.");
            }
            else
            {
                return Ok(skillsByTitle);
            }
        }

        // GET: api/skills/project/{projectSectionId}
        [HttpGet("project/{projectSectionId}")]
        public IActionResult GetSkillsByProjectSetion(int projectSectionId)
        {
            var skillsByProject = _skillRepository.GetSkillsByProjectSection(projectSectionId);

            if (skillsByProject == null)
            {
                return NotFound("Project doesn't exist.");
            }
            else
            {
                return Ok(skillsByProject);
            }
        }


        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
