using System;
using System.Collections.Generic;

namespace api.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime Created { get; set; }
        public virtual int TopicId { get; set; }
        public virtual Topic Topic { get; set; }
        public virtual User User { get; set; }
        public virtual List<Answer> Answers { get; set; }
    }
}