const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY,

    },
});

async function getTrendingMoviesPreview() {
    // Realizamos consulta con fetch
    //const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key='+ API_KEY);
    const { data } = await api('trending/movie/day');
    
    // we need to parse the file in JSON
    //const data = await res.json();
    // Access to movies
    const movies = data.results;
    console.log(movies)

    movies.forEach(movie => {
        // Select HTML elements
        const trendingPreviewMoviesSectionContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
        
        // Create HTML element
        const movieContainer = document.createElement('div');
   
        // Add a HTML class
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt',movie.title);
        movieImg.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300'+ movie.poster_path);
        movieContainer.appendChild(movieImg)

        trendingPreviewMoviesSectionContainer.appendChild(movieContainer);
    });
}
async function getCategoriesPreview() {
    // Realizamos consulta con fetch
    //const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key='+ API_KEY);
    const {data} = await api('genre/movie/list');
    
    // we need to parse the file in JSON
    //const data = await res.json();
    // Access to movies
    const categories = data.genres;
    console.log(categories)

    categories.forEach(category => {
        // Select HTML elements
        const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')
        
        // Create HTML element
        const categoryContainer = document.createElement('div');
   
        // Add a HTML class
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id','id' + category.id);
        const categoryTitleText = document.createTextNode(category.name)
        categoryTitle.appendChild(categoryTitleText)
        categoryContainer.appendChild(categoryTitle)

        previewCategoriesContainer.appendChild(categoryContainer);
    });
}


getTrendingMoviesPreview()
getCategoriesPreview()


