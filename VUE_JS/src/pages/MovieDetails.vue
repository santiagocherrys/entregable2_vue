<template>
    <h2>Detalles de la pelicula <h1>{{ store.movieDetails.Title }}</h1></h2>
    <div class="centrar">
        <div class="card-movie">
            <img :src="store.movieDetails.Poster" :alt="store.movieDetails.Title">
            <p> <span> Year: </span>{{ store.movieDetails.Year }}</p>
            <p> <span> Rated:</span>  {{ store.movieDetails.Rated }}</p>
            <p> <span>Released:</span> {{ store.movieDetails.Released }}</p>
            <p> <span>Runtime:</span>  {{ store.movieDetails.Runtime }}</p>
            <p> <span>Genre:</span> {{ store.movieDetails.Genre }}</p>
            <p> <span>Director:</span> {{ store.movieDetails.Director }}</p>
            <p> <span>Writer:</span> {{ store.movieDetails.Writer }}</p>
            <p> <span>Actors:</span> {{ store.movieDetails.Actors }}</p>
            <p> <span>Plot:</span> {{ store.movieDetails.Plot }}</p>
            <p> <span>Language:</span> {{ store.movieDetails.Language }}</p>
            <p> <span>Country:</span> {{ store.movieDetails.Country }}</p>
            <p> <span>Awards:</span> {{ store.movieDetails.Awards }}</p>
            <p> <span>Ratings:</span> {{ store.movieDetails.Ratings }}</p>
        </div>
        <button><router-link :to="{ name: 'home'}">Regresar</router-link></button>
    </div>
    
   
    
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router'
import { useMoviesStore } from "@/store/movies.store"

const route = useRoute()
const moviedID = route.params.id as string

const store = useMoviesStore();
store.getMovieDetail(moviedID);
</script>

<style lang="scss" scoped>
h2{
    color: $white;
    text-align: center;
    margin-top: 5px;
    h1 {
            color: $success;
            font-weight: bold;
        }
}

.centrar{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.card-movie {
    height: 100%;
    width: auto;
    background: $secondary;
    padding: 10px;
    text-align: center;
    border: 2px solid $primary;
    border-radius: 10px;

    .title-card {
        color: $white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
    }

    p {
        color: $white;
        span {
            color: $primary;
            font-weight: bold;
        }
    }

    img {
        width: 90%;
        height: 300px;
        object-fit: scale-down;
        border-radius: 10px;
    }
}

button{
    padding: 3px;
}
</style>
