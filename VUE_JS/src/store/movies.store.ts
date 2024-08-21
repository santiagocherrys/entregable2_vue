import type { Movie } from "@/model/movie.model";
import { defineStore } from "pinia";
import HTTP from "@/api/client-http"
import type { MovieDetails } from "@/model/movieDetails.model";

export const useMoviesStore = defineStore('movies', {
    //state es el reactivo
    state: () =>({
        listMovies: [] as Movie[],
        movieDetails: {} as MovieDetails
    }),
    actions:{
        async getMovies(search: string = 'movies'){
            const response = await HTTP.get('',{
                params:{
                    s: search,
                }
            })
            this.listMovies =response.data.Search;
        },
        async getMovieDetail(Id: string = ''){
            const response = await HTTP.get('',{
                params:{
                    i: Id,
                }
            })
            this.movieDetails = response.data;
        }
    }

})