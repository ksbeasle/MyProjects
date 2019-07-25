namespace firstapp_tutorial.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DataAnnotations : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Games", "title", c => c.String(nullable: false));
            AlterColumn("dbo.Games", "rating", c => c.String(nullable: false));
            AlterColumn("dbo.Games", "platform", c => c.String(nullable: false));
            AlterColumn("dbo.Games", "genre", c => c.String(nullable: false));
            AlterColumn("dbo.Games", "comment", c => c.String(maxLength: 50));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Games", "comment", c => c.String());
            AlterColumn("dbo.Games", "genre", c => c.String());
            AlterColumn("dbo.Games", "platform", c => c.String());
            AlterColumn("dbo.Games", "rating", c => c.String());
            AlterColumn("dbo.Games", "title", c => c.String());
        }
    }
}
