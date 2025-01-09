import { useState, useCallback } from 'react';
import SearchBar from './SearchBar';
import ExerciseList from './ExerciseList';
import CategoriesExercises from './CategoriesExercises';
const SearchAndExerciseList = () => {
    const [searchedExercises, setSearchedExercises] = useState([
        {
            bodyPart: 'waist',
            equipment: 'body weight',
            gifUrl: 'https://v2.exercisedb.io/image/aPgRy7VouW11kN',
            id: '0002',
            name: '45° side bend',
            target: 'abs',
            secondaryMuscles: ['obliques'],
            instructions: [
                'Stand with your feet shoulder-width apart and your arms extended straight down by your sides.',
                'Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.',
                'Pause for a moment at the bottom, then slowly return to the starting position.',
                'Repeat on the other side.',
                'Continue alternating sides for the desired number of repetitions.',
            ],
        },
        {
            bodyPart: 'upper legs',
            equipment: 'barbell',
            gifUrl: 'https://v2.exercisedb.io/image/sav2v9ZZwp1I-J',
            id: '0066',
            name: 'barbell one arm side deadlift',
            target: 'glutes',
            secondaryMuscles: ['hamstrings', 'quadriceps', 'lower back'],
            instructions: [
                'Stand with your feet shoulder-width apart, holding a barbell in one hand with an overhand grip.',
                'Keep your back straight and your core engaged.',
                'Bend at the hips and lower the barbell towards the outside of your leg, keeping your arm straight and your chest up.',
                'Lower the barbell as far as you can while maintaining good form.',
                'Pause for a moment, then slowly return to the starting position.',
                'Repeat for the desired number of repetitions, then switch sides.',
            ],
        },
        {
            bodyPart: 'waist',
            equipment: 'barbell',
            gifUrl: 'https://v2.exercisedb.io/image/wWdthLuwUEyvrV',
            id: '0096',
            name: 'barbell side bent v. 2',
            target: 'abs',
            secondaryMuscles: ['obliques', 'lower back'],
            instructions: [
                'Stand with your feet shoulder-width apart and hold a barbell with both hands, palms facing down.',
                'Keep your back straight and core engaged throughout the exercise.',
                'Slowly bend your torso to the right side, lowering the barbell towards your right knee.',
                'Pause for a moment, then return to the starting position.',
                'Repeat the movement on the left side.',
                'Continue alternating sides for the desired number of repetitions.',
            ],
        },
        {
            bodyPart: 'upper legs',
            equipment: 'barbell',
            gifUrl: 'https://v2.exercisedb.io/image/BXznb10eQlIQ2D',
            id: '0097',
            name: 'barbell side split squat v. 2',
            target: 'quads',
            secondaryMuscles: ['glutes', 'hamstrings', 'calves'],
            instructions: [
                'Stand with your feet wider than shoulder-width apart, toes pointing slightly outwards.',
                'Hold a barbell across your upper back, resting it on your shoulders.',
                'Take a big step to the side with your right foot, keeping your left foot planted.',
                'Bend your right knee and lower your body down into a squat position, keeping your chest up and your back straight.',
                'Push through your right heel to return to the starting position.',
                'Repeat on the other side, stepping out with your left foot.',
                'Continue alternating sides for the desired number of repetitions.',
            ],
        },
        {
            bodyPart: 'upper legs',
            equipment: 'barbell',
            gifUrl: 'https://v2.exercisedb.io/image/aLRiU8Aw6l0q9W',
            id: '0098',
            name: 'barbell side split squat',
            target: 'quads',
            secondaryMuscles: ['glutes', 'hamstrings', 'calves'],
            instructions: [
                'Stand with your feet wider than shoulder-width apart, toes pointing slightly outward.',
                'Hold a barbell across your upper back, resting it on your traps.',
                'Engage your core and keep your chest up as you lower your body down into a squat position, bending at the knees and hips.',
                'As you lower, push your knees out to the sides and keep your weight on your heels.',
                'Lower until your thighs are parallel to the ground, then push through your heels to return to the starting position.',
                'Repeat for the desired number of repetitions.',
            ],
        },
        {
            bodyPart: 'waist',
            equipment: 'cable',
            gifUrl: 'https://v2.exercisedb.io/image/dGtUnkNjtnFk9Q',
            id: '0221',
            name: 'cable side bend crunch (bosu ball)',
            target: 'abs',
            secondaryMuscles: ['obliques'],
            instructions: [
                'Stand with your feet shoulder-width apart, holding a cable handle in one hand.',
                'Place the other hand on your hip.',
                'Engage your core and slowly bend sideways towards the hand holding the cable, keeping your back straight.',
                'Pause for a moment at the bottom of the movement, then slowly return to the starting position.',
                'Repeat for the desired number of repetitions, then switch sides.',
            ],
        },
        {
            bodyPart: 'waist',
            equipment: 'cable',
            gifUrl: 'https://v2.exercisedb.io/image/3swcInYOPfi8kR',
            id: '0222',
            name: 'cable side bend',
            target: 'abs',
            secondaryMuscles: ['obliques'],
            instructions: [
                'Stand with your feet shoulder-width apart and grasp the cable handle with one hand.',
                'Keep your back straight and your core engaged.',
                'Slowly bend sideways at the waist, lowering the cable handle towards your knee.',
                'Pause for a moment, then return to the starting position.',
                'Repeat on the other side.',
                'Alternate sides for the desired number of repetitions.',
            ],
        },
        {
            bodyPart: 'waist',
            equipment: 'cable',
            gifUrl: 'https://v2.exercisedb.io/image/JJhZX8rNBSsrng',
            id: '0223',
            name: 'cable side crunch',
            target: 'abs',
            secondaryMuscles: ['obliques'],
            instructions: [
                'Attach a cable handle to a low pulley and stand sideways to the machine.',
                'Grasp the handle with the hand furthest from the machine and place your other hand on your hip.',
                'Keep your feet shoulder-width apart and your knees slightly bent.',
                'With your abs engaged, bend sideways at the waist, bringing your elbow down towards your hip.',
                'Pause for a moment at the bottom, then slowly return to the starting position.',
                'Repeat for the desired number of repetitions, then switch sides.',
            ],
        },
        {
            bodyPart: 'shoulders',
            equipment: 'dumbbell',
            gifUrl: 'https://v2.exercisedb.io/image/liBdFMz9Mztojj',
            id: '0286',
            name: 'dumbbell alternate side press',
            target: 'delts',
            secondaryMuscles: ['triceps', 'core'],
            instructions: [
                'Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder height.',
                'Press one dumbbell overhead while keeping the other dumbbell at shoulder height.',
                'Lower the pressed dumbbell back to shoulder height while pressing the other dumbbell overhead.',
                'Continue alternating sides for the desired number of repetitions.',
            ],
        },
        {
            bodyPart: 'waist',
            equipment: 'dumbbell',
            gifUrl: 'https://v2.exercisedb.io/image/MFV2kss0ccsdew',
            id: '0407',
            name: 'dumbbell side bend',
            target: 'abs',
            secondaryMuscles: ['obliques'],
            instructions: [
                'Stand up straight with your feet shoulder-width apart and hold a dumbbell in one hand, letting it hang down by your side.',
                'Keeping your back straight and your core engaged, slowly bend sideways at the waist towards the opposite side of the dumbbell, lowering the weight as far as you comfortably can.',
                'Pause for a moment, then slowly return to the starting position.',
                'Repeat for the desired number of repetitions, then switch sides and repeat.',
            ],
        },
    ]);
    const [searchedExercisesFiltered, setSetsearchedExercisesFiltered] =
        useState(searchedExercises);
    const handleSetSearchedExercises = useCallback((exercises) => {
        setSearchedExercises(exercises);
        setSetsearchedExercisesFiltered(exercises);
    }, []);
    console.log('rendering searchedExercises');
    return (
        <>
            <SearchBar setSearchedExercises={handleSetSearchedExercises} />
            <CategoriesExercises
                setSearchedExercises={handleSetSearchedExercises}
                searchedExercises={searchedExercises}
                setSetsearchedExercisesFiltered={
                    setSetsearchedExercisesFiltered
                }
            />
            <ExerciseList exercises={searchedExercisesFiltered} />
        </>
    );
};

export default SearchAndExerciseList;
