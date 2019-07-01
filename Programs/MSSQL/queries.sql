/*
SELECT * FROM HonorableMentions
SELECT * FROM Mobile
SELECT * FROM platforms
SELECT * FROM Racing
SELECT * FROM RPG
SELECT * FROM Shooters
SELECT * FROM Sports
SELECT * FROM SurvivalHorror
*/

/* Query to select the titles from the Mobile table using the alias name "Game Title" */
SELECT Title AS 'Game Title' from Mobile;

/* Query to select titles from Shooters table to upper case */
SELECT UPPER(Title) from Shooters;

/* Select unique genres from multiple tables */
SELECT DISTINCT m.Genre, s.Genre, r.Genre from Mobile AS m, Shooters AS s, Racing AS r;

/* Select a game title and print the first three characters */
SELECT SUBSTRING(Title, 1, 3) FROM Shooters;

/* Select a game title and find the index of the letter 'A' */
SELECT CHARINDEX('A', Title) FROM Mobile;

/* Select a title and remove white space from the right side */
SELECT RTRIM(Title) FROM RPG;

/* Select a title and remove white space from the left side */ 
SELECT LTRIM(Title) FROM Racing;

/* Select unique game titles and their lengths */
SELECT DISTINCT LEN(Title) AS 'Game Title Text Length' FROM Racing;

/* Select a Title from the Racing title and replace it with 'Test' */
SELECT REPLACE(Title, 'Forza Motorsport 7', 'Test') FROM Racing WHERE Title = 'Forza Motorsport 7';

/* Select the title and genre from Survival Horror table into one column */
SELECT CONCAT(Title, Genre) AS 'Game :: Genre' FROM SurvivalHorror;