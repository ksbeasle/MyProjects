using fooBarUniversity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace fooBarUniversity.DAL
{
    public class UniInitializer : System.Data.Entity. DropCreateDatabaseIfModelChanges<UniContext>
    {
        /* Pre-loaded data for the DB when we drop and create it again */
        protected override void Seed(UniContext context)
        {
            var students = new List<Student>
            {
            new Student{FirstName="Carson",LastName="Alexander",Enrolled=DateTime.Parse("2005-09-01")},
            new Student{FirstName="Meredith",LastName="Alonso",Enrolled=DateTime.Parse("2002-09-01")},
            };

            var course = new List<Course>
            {
            new Course{CourseID=222,Title="Algorithms",Credits=3,},
            new Course{CourseID=334,Title="Operating Systems",Credits=3,},
            };

            var enrollments = new List<Enrollment>
            {
            new Enrollment{StudentID=1,CourseID=222,Grade=Grade.A},
            new Enrollment{StudentID=1,CourseID=334,Grade=Grade.C},
            new Enrollment{StudentID=2,CourseID=222,Grade=Grade.B},
            new Enrollment{StudentID=2,CourseID=334,Grade=Grade.F},
            };

            enrollments.ForEach(s => context.Enrollments.Add(s));
            context.SaveChanges();
        }
    }
}