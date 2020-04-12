const exerciseLogs = [
  {
    id: 0,
    user: 0,
    exercise: "exercise first",
    sets: [
      {
        set: 1,
        reps: 15,
      },
      {
        set: 2,
        reps: 10,
      },
      {
        set: 3,
        reps: 10,
      },
    ],
    calories_burned: 50,
    description: "Enjoyed doing exercise firstng",
  },
];
const getExerciseLogs = () => {
  return exerciseLogs;
};
const getExerciseLogDetails = (exercise) => {
  let index = exerciseLogs.findIndex((obj) => obj.id === exercise);
  if (index != -1) {
    return exerciseLogs[index];
  }
  return null;
};
const addExerciseLogs = (exercise) => {
  exerciseLogs.push(exercise);
  return true;
};

const deleteExerciseLogs = (post) => {
  exerciseLogs = exerciseLogs.filter((obj) => obj.id === post);
  return true;
};
module.exports = {
  exerciseLogs,
  getExerciseLogs,
  getExerciseLogDetails,
  addExerciseLogs,
  deleteExerciseLogs,
};
