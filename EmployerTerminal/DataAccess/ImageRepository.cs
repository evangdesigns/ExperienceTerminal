using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using EmployerTerminal.Models;
using System.Data.SqlClient;
using Dapper;

namespace EmployerTerminal.DataAccess
{
    public class ImageRepository
    {
        readonly string ConnectionString;
        public ImageRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("EmployerTerminal");
        }

        public List<Image> GetAllImages()
        {
            var sql = "select * from image_table";

            using (var db = new SqlConnection(ConnectionString))
            {
                var images = db.Query<Image>(sql).ToList();
                return images;
            }
        }

        public List<Image> GetImagesByProjectId(int projectId)
        {
            var sql = "SELECT * FROM image_table WHERE project_id = @projectId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { ProjectId = projectId };

                var images = db.Query<Image>(sql, parameters).ToList();
                return images;
            }
        }

        public Image GetImageByImageId(int imageId)
        {
            var sql = "SELECT * FROM image_table WHERE image_id = @imageId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { ImageId = imageId };

                var image = db.QueryFirst<Image>(sql, parameters);
                return image;
            }
        }
    }
}
