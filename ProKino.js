//Node.js 10.14.0
//Plain Javascript and Node.js is supported
// html/css is not supported here 

"use strict"

const numberOfFilms = +prompt ("Сколько
  фильмов вы смотрели?", "");
 
 let personalMovieDB = {
   count : numberOfFilms, 
   movies : {}, 
   actors : {}, 
   genres : [], 
   privat : false
 };

const a = prompt ("Последний фильм,
             который вы смотрели?", "");
      b = prompt ("Оцените его в баллах.", 
       "");
      c = prompt ("Последний фильм,
             который вы смотрели?", "");
      d = prompt ("Оцените его в баллах.", 
       "");  
     
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
