

CREATE TABLE Shooters(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
UNIQUE(gamePlatformID)
);


CREATE TABLE RPG(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
UNIQUE(gamePlatformID)
);


CREATE TABLE Racing(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
UNIQUE(gamePlatformID)
);


CREATE TABLE Sports(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
UNIQUE(gamePlatformID)
);


CREATE TABLE SurvivalHorror(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
UNIQUE(gamePlatformID)
);


CREATE TABLE Mobile(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
UNIQUE(gamePlatformID)
);


CREATE TABLE HonorableMentions(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
UNIQUE(gamePlatformID)
);


CREATE TABLE platforms(
platformID INT PRIMARY KEY IDENTITY (1,1),
platformName VARCHAR(25)
CONSTRAINT fk_platform_shooters FOREIGN KEY (platformID) REFERENCES Shooters (gamePlatformID),
CONSTRAINT fk_platform_rpg FOREIGN KEY (platformID) REFERENCES RPG (gamePlatformID),
CONSTRAINT fk_platform_racing FOREIGN KEY (platformID) REFERENCES Racing (gamePlatformID),
CONSTRAINT fk_platform_sports FOREIGN KEY (platformID) REFERENCES Sports (gamePlatformID),
CONSTRAINT fk_platform_survivalhorror FOREIGN KEY (platformID) REFERENCES SurvivalHorror (gamePlatformID),
CONSTRAINT fk_platform_mobile FOREIGN KEY (platformID) REFERENCES Mobile (gamePlatformID),
CONSTRAINT fk_platform_honorablementions FOREIGN KEY (platformID) REFERENCES HonorableMentions (gamePlatformID)
);