function signUp() {
    alert("Sign up functionality is not implemented yet.");
}

const featuredMovies = [
    { title: "Star Wars: Rouge One", image: "rouge1.jpg"  },
    { title: "Tenant", image: "Tenent.jpg" },
    { title: "Interstellar", image: "interstellar.jpg" },
    { title: "Up", image: "up.jpg" },
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
    { title: "Pirates of the Caribbean: On Strangers Tides", image: "pcst.jpg"  },
    { title: "Avengers: Infinity War", image: "aiw.jpg" },
    { title: "Pulp Fiction", image: "pf.jpg" },
    { title: "The Hobbit: An Unexpected Journey", image: "hobbit.jpg" },
    { title: "Dirty Dancing", image: "dd.webp" },
    { title: "Black Panther", image: "bp.jpeg" },
    { title: "Back to the Future Part II", image: "btf2.webp" },
    { title: "Indiana Jones and the Last Crusade", image: "ijlc.jpg" },
    { title: "Mad Max: Fury Road", image: "mmfr.jpg" },
    { title: "Dark Knight", image: "dn.jpg" },
    { title: "Tron: Legacy", image: "tron.jpg" },
    { title: "Transformers: Revenge of the Fallen", image: "transformers.jpg" },
    { title: "Iron Man 3", image: "ironman3.jpg" },
    { title: "1917", image: "1917.jpg" },
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
    { title: "From", image: "from.jpg"  },
    { title: "The Mandalorian", image: "mando.jpg" },
    { title: "Altered Carbon", image: "ac.jpg" },
    { title: "Stranger Things", image: "st.jpg" },
    { title: "Homeland", image: "hl.webp" },
    { title: "Moonknight", image: "mk.webp" },
    { title: "Yellowstone", image: "yellowstone.jpg" },
    { title: "House of Cards", image: "hoc.jpg" },
    { title: "Suits", image: "suits.jpg" },
    { title: "House", image: "house.jpg" },
    { title: "Game of Thrones", image: "got.jpg" },
    { title: "Lost", image: "lost.jpg" },
    { title: "Hannibal", image: "hannibal.jpg" },
    { title: "Fallout", image: "fallout.webp" },
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