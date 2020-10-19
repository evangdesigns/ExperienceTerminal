using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployerTerminal.Models
{
    public class Image
    {
        public int Image_id { get; set; }
        public int Project_id { get; set; }
        public string Image_url { get; set; }
        public string Image_alt_text { get; set; }
    }
}
