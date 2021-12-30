const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



const main = document.getElementById("main");

async function generateMovie() {
    const resp = await fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
    );
    const respData = await resp.json()
        const result = respData.results
    return result
}


getMovies(generateMovie())
async function getMovies(data) {
    const result = await data
    result.forEach(async element => {
        const { poster_path, title, vote_average } = await element
        
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
                <img src="${IMGPATH + poster_path}" alt="${title}">
                <div class="movie__info">
                    <span>${vote_average}</span>
                    <h4>${title}</h4>
                </div>
        `;
        main.appendChild(movieEl);
    });
}
