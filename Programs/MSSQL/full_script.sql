DROP TABLE HonorableMentions
DROP TABLE Mobile
DROP TABLE platforms
DROP TABLE Racing
DROP TABLE RPG
DROP TABLE Shooters
DROP TABLE Sports
DROP TABLE SurvivalHorror



CREATE TABLE Shooters(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(55) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
);


CREATE TABLE RPG(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
);


CREATE TABLE Racing(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
);


CREATE TABLE Sports(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
);


CREATE TABLE SurvivalHorror(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
);


CREATE TABLE Mobile(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
);


CREATE TABLE HonorableMentions(
gameID INT PRIMARY KEY IDENTITY (1,1),
Title VARCHAR(25) NOT NULL,
Genre VARCHAR(25) NOT NULL,
Rating INT NOT NULL,
gamePlatformID INT NOT NULL,
);


CREATE TABLE platforms(
platformID INT PRIMARY KEY IDENTITY (1,1),
platformName VARCHAR(25)
);


INSERT INTO platforms (platformName) values 
('Xbox One'),
('Mobile'),
('Multi-Platform');

INSERT INTO Shooters (Title, Genre, Rating, gamePlatformID) values
('Enter the Gungeon: Advanced Gungeons and Draguns', 'Shooter', 9, 3),
('Halo: Master Chief Collection', 'Shooter', 9, 1),
('Battlefield V', 'Shooter', 10, 3);

INSERT INTO RPG (Title, Genre, Rating, gamePlatformID) values
('Fallout 4', 'RPG', 9, 3),
('Witcher 3', 'RPG', 10, 3),
('Divinity Original sin 2', 'RPG', 10, 3);

INSERT INTO Racing (Title, Genre, Rating, gamePlatformID) values
('Need For Speed: Payback', 'Racing', 8, 3),
('Forza Horizon 3', 'Racing', 9, 3),
('Forza Motorsport 7', 'Racing', 10, 3);

INSERT INTO Sports (Title, Genre, Rating, gamePlatformID) values
('Madden NFL', 'Sports', 7, 3),
('NBA 2K', 'Sports', 8, 3);

INSERT INTO SurvivalHorror(Title, Genre, Rating, gamePlatformID) values
('Dying Light', 'Survival Horror', 7, 3),
('Resident Evil 7', 'Survival Horror', 10, 3);

INSERT INTO Mobile (Title, Genre, Rating, gamePlatformID) values
('Clash of Clans', 'Mobile', 7, 2),
('Fallout Shelter', 'Mobile', 9, 2),
('Kings Raid', 'Mobile', 10, 2);

INSERT INTO HonorableMentions(Title, Genre, Rating, gamePlatformID) values
('Call of Duty WW2', 'Shooter', 5, 3),
('Rocket League', 'Sports', 7, 3),
('Cuphead', 'Shooter', 9, 3);

SELECT * FROM HonorableMentions
SELECT * FROM Mobile
SELECT * FROM platforms
SELECT * FROM Racing
SELECT * FROM RPG
SELECT * FROM Shooters
SELECT * FROM Sports
SELECT * FROM SurvivalHorror