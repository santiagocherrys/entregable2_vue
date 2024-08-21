<template>
  <section class="banner-section d-middle w-100 p-10">
    <form>
      <div class="search-input d-middle">
        <input
          type="text"
          :required="true"
          v-model="inputValue"
          @input="onChangeInputValue"
        />
        <span>Search movie</span>
      </div>
    </form>
    <div class="container-image-banner">
      <img :src="imageUrl" alt="" />
    </div>
  </section>
</template>

<script setup lang="ts">
/**Vue imports */
import { ref } from "vue";
/**Assets imports */
import headerImg from "@/assets/images/header-img.svg";
import { useMoviesStore } from "@/store/movies.store"

const imageUrl = ref(headerImg);
const inputValue = ref<string>("");

const store = useMoviesStore()

const onChangeInputValue = () =>{

  const search = inputValue.value.trim().toLowerCase();//quita los espacios a las esquinas

  if(search == ""){
    store.getMovies()
    return
  }

  setTimeout(() =>{
    store.getMovies(search)
  }, 1000);
  //console.log(store.listMovies[1].imdbID);
  //store.getMovieDetail()
  console.log(inputValue.value)
  //console.log(store.movieDetails);
  
}
</script>

<style scoped lang="scss">
@import "@/components/banner/banner";
</style>
