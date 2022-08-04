using System;
namespace Todolist.Models
{
    public class Todo
    {

        public int Id { get; set; }

        public string Description { get; set; }

        public bool IsDone { get; set; }

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public Todo()
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {
        }
    }
}

