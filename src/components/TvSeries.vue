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
