function signUp() {
    alert("Sign up functionality is not implemented yet.");
}

const featuredMovies = [
    { title: "Star Wars: Rouge One", image: './assets/rouge1.jpg'},
    { title: "Tenant", image: './assets/Tenent.jpg' },
    { title: "Interstellar", image: './assets/interstellar.jpg' },
    { title: "Up", image: './assets/up.jpg' },
];

function loadFeaturedMovies() {
    const featuredMovieList = document.getElementById('featured-movie-list');
    featuredMovies.forEach(movie => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3 movie-card';
        col.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        featuredMovieList.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', loadFeaturedMovies);

const allMovies = [
    { title: "Pirates of the Caribbean: On Strangers Tides", image: './assets/pcst.jpg' },
    { title: "Avengers: Infinity War", image: './assets/aiw.jpg' },
    { title: "Pulp Fiction", image: './assets/pf.jpg' },
    { title: "The Hobbit: An Unexpected Journey", image: './assets/hobbit.jpg' },
    { title: "Dirty Dancing", image: './assets/dd.webp' },
    { title: "Black Panther", image: './assets/bp.jpeg' },
    { title: "Back to the Future Part II", image: './assets/btf2.webp' },
    { title: "Indiana Jones and the Last Crusade", image: './assets/ijlc.jpg' },
    { title: "Mad Max: Fury Road", image: './assets/mmfr.jpg' },
    { title: "Dark Knight", image: './assets/dn.jpg' },
    { title: "Tron: Legacy", image: './assets/tron.jpg' },
    { title: "Transformers: Revenge of the Fallen", image: './assets/transformers.jpg' },
    { title: "Iron Man 3", image: './assets/ironman3.jpg' },
    { title: "1917", image: './assets/1917.jpg' },
]

function loadMovies() {
    const allMoviesList = document.getElementById('all-movie-list');
    allMovies.forEach(movie => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3 movie-card';
        col.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        allMoviesList.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', loadMovies);

const allShows = [
    { title: "From", image: './assets/from.jpg' },
    { title: "The Mandalorian", image: './assets/mando.jpg' },
    { title: "Altered Carbon", image: './assets/ac.jpg' },
    { title: "Stranger Things", image: './assets/st.jpg' },
    { title: "Homeland", image: './assets/hl.webp' },
    { title: "Moonknight", image: './assets/mk.webp' },
    { title: "Yellowstone", image: './assets/yellowstone.jpg' },
    { title: "House of Cards", image: './assets/hoc.jpg' },
    { title: "Suits", image: './assets/suits.jpg' },
    { title: "House", image: './assets/house.jpg' },
    { title: "Game of Thrones", image: './assets/got.jpg' },
    { title: "Lost", image: './assets/lost.jpg' },
    { title: "Hannibal", image: './assets/hannibal.jpg' },
    { title: "Fallout", image: './assets/fallout.webp' },
]

function loadShows() {
    const allShowsList = document.getElementById('show-list');
    allShows.forEach(show => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3 show-card';
        col.innerHTML = `
            <img src="${show.image}" alt="${show.title}">
            <h3>${show.title}</h3>
        `;
        allShowsList.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', loadShows);