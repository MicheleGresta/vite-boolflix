<script>
import LangFlag from 'vue-lang-code-flags';
import { findFlagUrlByIso2Code } from "country-flags-svg";
import { fetchFilmList, storage, fetchTvList, getPoster } from '../store';
export default {
    data() {
        return {
            storage,
        }

    },
    components: {
        LangFlag,

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
    <div class="col position-relative" v-for="singleFilm in storage.arrayFilms">
        <img class="poster" :src=getPoster(singleFilm.poster_path) alt="">
        <ul>
            <li>Titolo: {{ singleFilm.title }} </li>
            <li>Titolo Originale: {{ singleFilm.original_title }} </li>
            <li>Lingua: {{ singleFilm.original_language }}
                <lang-flag :iso="singleFilm.original_language" />
            </li>
            <li>Voto: {{ Math.floor(singleFilm.vote_average) / 2 }} </li>
            <li>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
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
    li{
        color: white;
        
    }    
}
i{
            width: 20px;
            aspect-ratio: 1/1;
            color: white;
            display: block;
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

.margin-title {
    padding-top: 113px;
}

.col:hover ul {
    display: block;
}
</style>
