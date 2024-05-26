export class HttpService{
    constructor(){
        this.urlBase = "https://localhost:7030/api/Movies";
    }

    async getAllMovies(){
        try{
            let response = await fetch(this.urlBase);
            if(!response.ok){
                throw new Error('Network response was not OK');
            }
            let movies = await response.json();
            return movies;
        }
        catch(error){
            console.error('Error: ', error);
            return [];
        }
    }
}