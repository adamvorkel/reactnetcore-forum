using System;

namespace api.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime Created { get; set; }
    }
}