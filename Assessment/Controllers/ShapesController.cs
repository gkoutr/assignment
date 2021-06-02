using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assessment.Models;
using Assessment.Services;
using Microsoft.AspNetCore.Mvc;

namespace Assessment.Controllers
{
    [Route("api/shapes")]
    public class ShapesController : Controller
    {
        [HttpGet]
        public ShapeDto GetShapes()
        {
            return ShapeService.GetShapeResponse();
        }
    }
}
