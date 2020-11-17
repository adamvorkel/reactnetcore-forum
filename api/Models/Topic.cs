using System.Collections.Generic;

namespace api.Models
{
    public class Topic
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<Question> Questions { get; set; }
    }
}