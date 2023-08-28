<script>
import { fetchFilmList, storage, fetchTvList, getPoster} from '../store';
import { findFlagUrlByIso2Code } from "country-flags-svg";

export default {
    data() {
        return {
            storage,
        }

    },
    methods: {
        fetchFilmList,
        findFlagUrlByIso2Code,
        fetchTvList,
        getPoster,
    },
    watch: {
        "storage.searchTextInput": function (newSearchText) {
            this.storage.arrayFilms = [],
                this.fetchFilmList(`${storage.url}?api_key=${storage.apiKey}&query=${newSearchText}`)
        }
    }
}
</script>

<template>
    <form class="d-flex" role="search" @click.prevent="fetchFilmList(), fetchTvList()">
        <input class="form-control me-2" type="search" placeholder="Search film" aria-label="Search"
            v-model="storage.searchInputText">
        <button class="btn btn-outline-success" type="submit" @click.prevent="fetchFilmList(), fetchTvList()">Go</button>
    </form>
    <!-- film -->
    <ul v-for="singleFilm in storage.arrayFilms">
        <li>Titolo: {{ singleFilm.title }} </li>
        <li>Titolo Originale: {{ singleFilm.original_title }} </li>
        <li>Lingua: {{ singleFilm.original_language }}
            <img class="flag" :src=findFlagUrlByIso2Code(singleFilm.original_language)>
        </li>
        <li>Voto: {{ Math.floor(singleFilm.vote_average) + 1 }} </li>
        <img class="poster" :src=getPoster(singleFilm.poster_path)   alt="">
    </ul>
    <!-- serie tv -->
    <ul v-for="singleTv in storage.arrayTv">
        <li>Nome: {{ singleTv.name }} </li>
        <li>Nome Originale: {{ singleTv.original_name }} </li>
        <li>Lingua: {{ singleTv.original_language }}
            <img class="flag" :src=findFlagUrlByIso2Code(singleTv.original_language)>
        </li>
        <li>Voto: {{ Math.floor(singleTv.vote_average) + 1 }} </li>
    </ul>
</template>
    
<style scoped lang="scss">
form {
    width: 500px;
    margin: auto;
    padding-top: 5rem;
    padding-bottom: 5rem;


}

.flag {
    height: 20px;

}
</style>
