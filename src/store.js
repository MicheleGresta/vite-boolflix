import axios from "axios";
import { reactive } from "vue";

export default {
    data() {
        return {         
        }
    }
}

export const storage = reactive({
    arrayFilms: [],
    arrayTv: [],
    searchInputText: "",
    apiKey: "f3e2568c953a10d1b25ceab042f4828f",
    urlFilm:"https://api.themoviedb.org/3/search/movie",
    urlTv:"https://api.themoviedb.org/3/search/tv",
    urlPosterBase:"https://image.tmdb.org/t/p/",
    posterSize: "",
    sizeProva: "w342"
})


export function fetchFilmList() {
    storage.arrayFilms = []
    const urlFullFilm = `${storage.urlFilm}?api_key=${storage.apiKey}&query=${storage.searchInputText}`

    axios.get(urlFullFilm).then((response) => {
        storage.arrayFilms.push(...response.data.results)
    })

}
export function fetchTvList() {
    storage.arrayFilms = []
    const urlFullTv = `${storage.urlTv}?api_key=${storage.apiKey}&query=${storage.searchInputText}`

    axios.get(urlFullTv).then((response) => {
        storage.arrayTv.push(...response.data.results)
    })

}

export function getPoster(urlPoster) {

    const posterGen = storage.urlPosterBase + storage.sizeProva + urlPoster

    return posterGen
} 