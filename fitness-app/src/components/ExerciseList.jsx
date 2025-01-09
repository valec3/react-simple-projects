const ExerciseList = ({ exercises }) => {
    return (
        <div>
            {exercises.map((exercise) => {
                return (
                    <div key={exercise.id}>
                        <h3>{exercise.name}</h3>
                        <p>{exercise.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ExerciseList;
