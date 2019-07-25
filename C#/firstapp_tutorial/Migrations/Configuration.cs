namespace firstapp_tutorial.Migrations
{
    using firstapp_tutorial.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<firstapp_tutorial.Models.GameDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(firstapp_tutorial.Models.GameDBContext context)
        {
            context.Games.AddOrUpdate(i => i.title,
       new Game
       {
           title = "test",
           score = 10,
           rating = "M",
           platform = "x",
           genre = "x",
           comment = "comment"
       },
        new Game
        {
            title = "tes1t",
            score = 10,
            rating = "M",
            platform = "x",
            genre = "x",
            comment = "comment2"
        }
  );
        }
    }
}
