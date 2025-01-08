const API_URL = 'https://exercisedb.p.rapidapi.com';
const headers = {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
};
export const getExercises = () => {
    return fetch(`${API_URL}/exercises`, {
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
