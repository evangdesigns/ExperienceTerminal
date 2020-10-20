using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EmployerTerminal.DataAccess;

namespace EmployerTerminal.Controllers
{
    [Route("api/images")]
    public class ImageController : Controller
    {
        ImageRepository _imageRepository;

        public ImageController(ImageRepository repository)
        {
            _imageRepository = repository;
        }

        // GET: api/images
        [HttpGet]
        public IActionResult GetAllProjects()
        {
            var images = _imageRepository.GetAllImages();
            return Ok(images);
        }

        // GET: api/imagess/project/{projectId}
        [HttpGet("project/{projectId}")]
        public IActionResult GetSkillsByTitle(int projectId)
        {
            var images = _imageRepository.GetImagesByProjectId(projectId);

            if (images == null)
            {
                return NotFound("No images by that Project Id.");
            }
            else
            {
                return Ok(images);
            }
        }
    }
}
