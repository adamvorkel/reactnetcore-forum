using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Data;

namespace api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly DataContext _context;

        public QuestionsController(DataContext context)
        {
            _context = context;
            _context.Database.EnsureCreated();
        }

        [HttpGet]
        public async Task<IActionResult> GetQuestions()
        {
            return Ok(await _context.Questions.ToArrayAsync());
        }
    }
}