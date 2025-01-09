const API_URL = 'https://exercisedb.p.rapidapi.com';
const API_URL_YT = 'https://youtube-search-and-download.p.rapidapi.com';
const headers = {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
};
const headersYT = {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY_YT,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
};
export const getExercises = async (search = '') => {
    return fetch(`${API_URL}/exercises/name/${search}`, {
        method: 'GET',
        headers,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => data)
        .catch((error) => {
            console.error('Error fetching exercises:', error);
            throw error; // Re-throw the error to handle it elsewhere
        });
};
export const getCategories = async () => {
    return fetch(`${API_URL}/exercises/bodyPartList`, {
        method: 'GET',
        headers,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
            throw error;
        });
};

export const getDetailExercise = async (id) => {
    return fetch(`${API_URL}/exercises/exercise/${id}`, {
        method: 'GET',
        headers,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => data)
        .catch((error) => {
            console.error('Error fetching detail exercise:', error);
            throw error;
        });
};

export const getRelatedVideos = async (search) => {
    return fetch(`${API_URL_YT}/search?query=${search} ejercicio`, {
        method: 'GET',
        headers: headersYT,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => data)
        .catch((error) => {
            console.error('Error fetching related videos:', error);
            throw error;
        });
};
