using Assessment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assessment.Services
{
    /// <summary>
    /// Service that retrieves shapes and colors for the client side. We return a DTO model
    /// that contains both shapes and colors to avoid multiple separate API calls. 
    /// </summary>
    public static class ShapeService
    {
        private static List<String> GetColors()
        {
            List<String> colors = new List<String>
            {
                "black",
                "red",
                "blue",
                "purple",
                "green",
                "pink"
            };
            return colors;

        }

        private static List<Shape> GetShapes()
        {
            List<Shape> shapes = new List<Shape>();
            Shape shape = new Shape();
            Dimensions dimensions = new Dimensions();
            dimensions.Height = 50;
            dimensions.Width = 100;
            shape.Id = 1;
            shape.Name = "Rectangle";
            shape.dimensions = dimensions;
            shapes.Add(shape);

            dimensions = new Dimensions();
            shape = new Shape();
            shape.Id = 2;
            shape.Name = "Square";
            dimensions.Width = 100;
            dimensions.Height = 100;
            shape.dimensions = dimensions;
            shapes.Add(shape);
            return shapes;
        }

        public static ShapeDto GetShapeResponse()
        {
            ShapeDto shapeDto = new ShapeDto();
            shapeDto.Colors = GetColors();
            shapeDto.Shapes = GetShapes();
            return shapeDto;
        }
    }
}
