<script>
import LangFlag from 'vue-lang-code-flags';
import { findFlagUrlByIso2Code } from "country-flags-svg";
import { fetchFilmList, storage, fetchTvList, getPoster } from '../store';

import Films from "./Films.vue";
import TvSeries from "./TvSeries.vue";
export default {
    data() {
        return {
            storage,
        }

    },
    components: {
        LangFlag,
        Films,
        TvSeries,

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
    <div class="container margin-title">
        <!-- film -->
        <h2>Lista Film</h2>
        <div class="row row-lg-cols-6">
            <Films />
        </div>
        <!-- serie tv -->
        <h2>Lista Serie Tv</h2>
        <div class="row row-lg-cols-6">
            <TvSeries />
        </div>
    </div>
</template>

<style scoped lang="scss">
h2 {
    margin-top: 6rem;
    padding-left: 1rem;
    color: white;
    border-left: 3px solid red;
}
.margin-title {
    padding-top: 113px;
}

</style>
