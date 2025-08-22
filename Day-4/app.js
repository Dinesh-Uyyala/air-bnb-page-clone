// OMDb API configuration
const API_KEY = '3750efaa';
const API_URL = 'https://www.omdbapi.com/';

// Function to search for a movie
function searchMovie() {
    const movieInput = document.getElementById('movieInput');
    const movieName = movieInput.value.trim();
    
    // Check if input is empty
    if (!movieName) {
        showError('Please enter a movie name!');
        return;
    }
    
    // Show loading state
    showLoading(true);
    hideError();
    clearResults();
    
    // Construct API URL
    const apiUrl = `${API_URL}?t=${encodeURIComponent(movieName)}&apikey=${API_KEY}`;
    
    // Fetch movie data from API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            showLoading(false);
            
            if (data.Response === 'True') {
                displayMovie(data);
            } else {
                showError(data.Error || 'Movie not found!');
            }
        })
        .catch(error => {
            showLoading(false);
            console.error('Error fetching movie data:', error);
            showError('Something went wrong. Please try again!');
        });
}

// Function to display movie details
function displayMovie(movie) {
    const movieResult = document.getElementById('movieResult');
    
    // Create movie card HTML
    const movieHTML = `
        <div class="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
            <div class="flex flex-col md:flex-row gap-6">
                <!-- Movie Poster -->
                <div class="flex-shrink-0">
                    ${movie.Poster !== 'N/A' 
                        ? `<img src="${movie.Poster}" alt="${movie.Title}" class="w-48 h-72 object-cover rounded-lg shadow-md mx-auto md:mx-0">` 
                        : `<div class="w-48 h-72 bg-gray-200 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                             <span class="text-gray-500 text-center">🎬<br>No Poster<br>Available</span>
                           </div>`
                    }
                </div>
                
                <!-- Movie Details -->
                <div class="flex-1">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">🎬 ${movie.Title}</h2>
                    
                    <div class="space-y-3">
                        <div class="flex items-center">
                            <span class="font-semibold text-gray-700 w-24">📅 Year:</span>
                            <span class="text-gray-600">${movie.Year}</span>
                        </div>
                        
                        <div class="flex items-center">
                            <span class="font-semibold text-gray-700 w-24">📌 Released:</span>
                            <span class="text-gray-600">${movie.Released}</span>
                        </div>
                        
                        <div class="flex items-center">
                            <span class="font-semibold text-gray-700 w-24">⭐ Rating:</span>
                            <span class="text-gray-600 font-medium">${movie.imdbRating}/10</span>
                        </div>
                        
                        <div class="flex items-center">
                            <span class="font-semibold text-gray-700 w-24">🎭 Genre:</span>
                            <span class="text-gray-600">${movie.Genre}</span>
                        </div>
                        
                        <div class="flex items-center">
                            <span class="font-semibold text-gray-700 w-24">⏱️ Runtime:</span>
                            <span class="text-gray-600">${movie.Runtime}</span>
                        </div>
                        
                        <div class="flex items-center">
                            <span class="font-semibold text-gray-700 w-24">🎬 Director:</span>
                            <span class="text-gray-600">${movie.Director}</span>
                        </div>
                    </div>
                    
                    <!-- Plot -->
                    <div class="mt-4">
                        <h3 class="font-semibold text-gray-700 mb-2">📖 Plot:</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">${movie.Plot}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    movieResult.innerHTML = movieHTML;
}

// Function to show/hide loading state
function showLoading(show) {
    const loading = document.getElementById('loading');
    if (show) {
        loading.classList.remove('hidden');
    } else {
        loading.classList.add('hidden');
    }
}

// Function to show error message
function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.innerHTML = `
        <p class="font-medium">❌ Error!</p>
        <p class="text-sm">${message}</p>
    `;
    errorDiv.classList.remove('hidden');
}

// Function to hide error message
function hideError() {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.classList.add('hidden');
}

// Function to clear previous results
function clearResults() {
    const movieResult = document.getElementById('movieResult');
    movieResult.innerHTML = '';
}

// Allow Enter key to trigger search
document.getElementById('movieInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchMovie();
    }
});
