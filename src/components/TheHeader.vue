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
        
        
    </div>

    
</template>
    
<style scoped lang="scss">
form {
    width: 500px;
    padding: 2rem;


}
.bg-netflix {
    background-color: rgb(31, 31, 31);
    height: 100%;
}
.header-container{
    background-color: rgb(19, 18, 18);
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;

    .form-control{
        background-color: white;
    }
}
.neftlix-img{
    width: 300px;
    padding: 1rem;

}



</style>
