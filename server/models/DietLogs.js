const dietLogs = [
  {
    id: 0,
    user: 0,
    food: "two Aaloo parathas",
    count: 2,
    calories: 40,
    description: "Lot of fat eaten today",
  },
];
const getDietLogs = () => {
  return dietLogs;
};
const getExerciseLogDetails = (exercise) => {
  let index = dietLogs.findIndex((obj) => obj.id === exercise);
  if (index != -1) {
    return dietLogs[index];
  }
  return null;
};
const addDietLogs = (exercise) => {
  dietLogs.push(exercise);  
  return true;
};

const deleteDietLogs = (post) => {
  dietLogs = dietLogs.filter((obj) => obj.id === post);
  return true;
};
module.exports = {
  dietLogs,
  getDietLogs,
  getExerciseLogDetails,
  addDietLogs,
  deleteDietLogs,
};
