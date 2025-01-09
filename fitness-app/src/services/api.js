const API_URL = 'https://exercisedb.p.rapidapi.com';
const headers = {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
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
