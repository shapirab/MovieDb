import { HttpService } from "./http.js";

const httpService = new HttpService();
const cardsContainer = document.getElementById('cards-container');

// let movies = httpService.getAllMovies();

// movies.forEach(movie => {
//     console.log(movie);
// });

(async() => {
    try{
        let movies = await httpService.getAllMovies();
        if(Array.isArray(movies)){
            movies.forEach(movie => {
                console.log(movie);
            });            
        }
        else{
            console.error("Movie data is not an array");
        }
    }
    catch(error){
        console.error('Error fetching movies: ', error);
    }
})();
   