import { useState, useEffect } from 'react';
import { getExercises } from '../services/api';

const useExercises = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchExercises = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await getExercises();
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching exercises:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchExercises();
    }, []);

    return { isLoading, data };
};

export default useExercises;
