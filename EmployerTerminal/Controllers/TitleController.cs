using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EmployerTerminal.DataAccess;


namespace EmployerTerminal
{
    [Route("api/title")]
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
    }
}