<script>
import { fetchFilmList, storage, fetchTvList, getPoster } from '../store';
import { findFlagUrlByIso2Code } from "country-flags-svg";
import LangFlag from 'vue-lang-code-flags';

export default {
    data() {
        return {
            storage,
        }

    },
    components: {
        LangFlag
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
    <div class="bg-netflix position-relative">
        <div class="header-container d-flex">
            <img class="neftlix-img" src="../assets/Logonetflix.png" alt="">
            <form class="d-flex" role="search" @click.prevent="fetchFilmList(), fetchTvList()">
                <input class="form-control me-2" type="search" placeholder="Search film" aria-label="Search"
                    v-model="storage.searchInputText">
                <button class="btn btn-outline-danger" type="submit"
                    @click.prevent="fetchFilmList(), fetchTvList()">Go</button>
            </form>
        </div>
        <!-- film -->
        <div class="container margin-title">
            <h2>Lista Film</h2>
            <div class="row row-lg-cols-6">
                <div class="col position-relative" v-for="singleFilm in storage.arrayFilms">
                    <img class="poster" :src=getPoster(singleFilm.poster_path) alt="">
                    <ul>
                        <li>Titolo: {{ singleFilm.title }} </li>
                        <li>Titolo Originale: {{ singleFilm.original_title }} </li>
                        <li>Lingua: {{ singleFilm.original_language }}
                            <lang-flag :iso="singleFilm.original_language" />
                        </li>
                        <li>Voto: {{ Math.floor(singleFilm.vote_average) / 2 }} </li>

                    </ul>
                </div>
            </div>
            <h2>Lista Serie Tv</h2>
            <div class="row row-lg-cols-6">
                <div class="col position-relative" v-for="singleTv in storage.arrayTv">
                    <img class="poster" :src=getPoster(singleTv.poster_path) alt="">
                    <ul>
                        <li>Nome: {{ singleTv.name }} </li>
                        <li>Nome Originale: {{ singleTv.original_name }} </li>
                        <li>Lingua: {{ singleTv.original_language }}
                            <lang-flag :iso="singleTv.original_language" />
                        </li>
                        <li>Voto: {{ Math.floor(singleTv.vote_average) / 2 }} </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- serie tv -->
</template>
    
<style scoped lang="scss">
form {
    width: 500px;
    padding: 2rem;


}



ul {
    list-style: none;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 1rem;
    width: 200px;
    margin: 0;
    display: none;
}

.col {
    padding: 0;
    margin-top: 1rem;
    
    img {
    height: 300px;
    width: 200px;
}
}

h2 {
    margin-top: 6rem;
    padding-left: 1rem;
    color: white;
    border-left: 3px solid red;
}

.bg-netflix {
    background-color: rgb(31, 31, 31);
}

.header-container{
    background-color: rgb(19, 18, 18);
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;
}

.neftlix-img{
    width: 300px;
    padding: 1rem;

}
.margin-title{
    padding-top: 113px;
}
.col:hover ul{
    display: block;
}
</style>
