import { HttpService } from "./http.js";

const httpService = new HttpService();
const cardsContainer = document.getElementById('cards-container');

(async() => {
    try{
        let movies = await httpService.getAllMovies();
        if(Array.isArray(movies)){
            movies.forEach(movie => {
                generateMovieCard(movie);
                
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

function generateMovieCard(movie){
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    let movieCard = document.createElement('div');
    movieCard.classList.add('card--movie');

    let movieImage = document.createElement('div');
    movieImage.classList.add('card--movie__image');

    let imageElement = document.createElement('img');
    imageElement.src = `data:image/png;base64,${movie.Cover}`;

    movieImage.appendChild(imageElement);
    movieCard.appendChild(movieImage);

    let movieInfo = document.createElement('div');
    movieInfo.classList.add('movie__info');

    let movieHeader = document.createElement('div');
    movieHeader.classList.add('movie-card--header');

    let movieHeading = document.createElement('h2');
    movieHeading.classList.add('movie-card__heading');
    movieHeading.innerText = movie.Title;

    let movieRating = document.createElement('div');
    movieRating.classList.add('movie-card__rating');

    movieHeader.appendChild(movieHeading);
    movieHeader.appendChild(movieRating);

    movieInfo.appendChild(movieHeader);
    movieCard.appendChild(movieInfo);
    
    cardContainer.appendChild(movieCard);

    
}
   