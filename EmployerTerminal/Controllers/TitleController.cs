using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EmployerTerminal.DataAccess;

namespace EmployerTerminal.Controllers
{
    [Route("api/titles")]
    [ApiController]
    public class TitleController : ControllerBase
    {
        TitleRepository _titleRepository;

        public TitleController(TitleRepository repository)
        {
            _titleRepository = repository;
        }

        [HttpGet]
        public IActionResult GetAllTitles()
        {
            var titles = _titleRepository.GetAllTitles();
            return Ok(titles);
        }

        [HttpGet("{id}")]
        public IActionResult GetTitle( int id)
        {
            var title = _titleRepository.GetTitle(id);
            return Ok(title);
        }

        [HttpGet("title/{title}")]
        public IActionResult GetTitleId(string title)
        {
            int titleId = _titleRepository.GetTitleId(title);
            return Ok(titleId);
        }
    }
}