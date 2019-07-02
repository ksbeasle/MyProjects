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

/* Display all titles ordered by rating ascending */
SELECT * FROM RPG ORDER BY Rating ASC;

/* Display all titles ordered by rating ascending and title descending */
SELECT * FROM Shooters ORDER BY Rating asc, Title Desc;

/* Select specific titles (Fallout 4, Witcher 3) from the RPG table */
SELECT * FROM RPG WHERE Title IN('Fallout 4', 'Witcher 3');

/* Select all titles EXCEPT for (Fallout 4, Witcher 3) from the RPG table */
SELECT * FROM RPG WHERE Title NOT IN('Fallout 4', 'Witcher 3');

/* Select titles with rating = 10 with name as "Elite" */
SELECT Title AS 'Elite' FROM Shooters WHERE Rating = 10;

/* Select all Titles that have the Genre "Racing" */
SELECT * FROM Racing WHERE Genre LIKE '%Racing%';

/* Select titles that end with the letter "d" */
SELECT * FROM Mobile Where Title LIKE '%d';

/* Select titles that end with the letter "d" and contain 2 letters */
SELECT * FROM Sports Where Title Like '__d';

/* Select titles with a rating is between 8 and 10 */
SELECT * FROM Mobile WHERE Rating BETWEEN 8 AND 10;

/* Select titles that are Rated 10 */
SELECT * FROM Mobile WHERE Rating = 10;