namespace firstapp_tutorial.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class comment : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Games", "comment", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Games", "comment");
        }
    }
}
