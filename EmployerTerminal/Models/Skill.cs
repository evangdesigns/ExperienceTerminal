using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace EmployerTerminal.Models
{
    public class Skill
    {
        public int Skill_id { get; set; }
        public int Skill_category { get; set; }
        public string Skill_name { get; set; }
        public string Svg_icon { get; set; }
    }
}
