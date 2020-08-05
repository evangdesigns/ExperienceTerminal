using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployerTerminal.Models
{
    public class Project
    {
        public int Project_id { get; set; }
        public int Project_section_id { get; set; }
        public int Project_skills_id { get; set; }
        public string Project_name { get; set; }
        public string Project_description { get; set; }
        public string Project_image_url { get; set; }
        public string Project_url { get; set; }
        public string Project_git_url { get; set; }
    }
}