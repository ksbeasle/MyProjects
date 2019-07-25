using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;
namespace firstapp_tutorial.Models
{
    public class Game
    {
        public int ID { get; set; }




        [Required]
        [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$")]
        [Display(Name = "Title")]
        public string title { get; set; }



        [Required]
        [Display(Name = "Score")]
        public double score { get; set; }



        [Required]
        [Display(Name = "Rating")]
        public string rating { get; set; }



        [Required]
        [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$")]
        [Display(Name = "Platform")]
        public string platform { get; set; }



        [Required]
        [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$")]
        [Display(Name = "Genre")]
        public string genre { get; set; }



        
        [StringLength(50)]
        [Display(Name = "Comment")]
        public string comment { get; set; }


    }

    public class GameDBContext : DbContext
    {
        public DbSet<Game> Games { get; set; }
    }
}