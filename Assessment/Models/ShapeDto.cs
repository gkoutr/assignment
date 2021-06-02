using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assessment.Models
{
    /// <summary>
    /// Custom Response DTO object to return to the client side. This will contain
    /// Shapes and Colors for Assignment #1
    /// </summary>
    public class ShapeDto
    {
        public List<Shape> Shapes { get; set; }
        public List<String> Colors { get; set; }
    }
}
