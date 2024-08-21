<template>
    <div class="container-movies d-middle p-100">
    <!-- <pre>
        {{JSON.stringify(listMovies, null,2)}}
    </pre> -->
    <CardMovie
    v-for="movie in store.listMovies"
    v-if="store.listMovies"
    :id="movie.imdbID"
    :poster="movie.Poster"
    :title="movie.Title"
    :type="movie.Type"
    :year="movie.Year" />
    <div v-else class="d-middle w-100"
    ><p>No hay resultados en la busqueda</p></div>
        
    </div>

    <div class="container-movies d-middle p-100">
        <p>{{store.movieDetails.Title}}</p>
        <p>{{ store.movieDetails.Year }}</p>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from "vue"
    import type {ApiResponse, Movie } from "@/model/movie.model"
    import CardMovie from "@/components/movies/CardMovie.vue"
    import { useMoviesStore } from "@/store/movies.store"
    

    

    const store = useMoviesStore()
    onMounted(() =>{
        fetchMovies()
    })

    const fetchMovies = async () =>{
        await store.getMovies()
        await store.getMovieDetail()
    }

    
    
</script>

<style scoped lang="scss">
.container-movies{
    flex-wrap: wrap;
    justify-content: space-araound;
    gap: 20px;
}

p{
    color: white
}
</style>