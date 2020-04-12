const posts = [
  {
    title: 0,
    time: "Oblique twist",
    image: "https://vimeo.com/178079508",
  },
  {
    id: 1,
    name: "Benchpress",
    video: "https://vimeo.com/178057019",
  },
];

const getPosts = () => {
  return posts;
};

const getExerciseDetails = (post) => {
  let index = posts.findIndex((obj) => obj.id === post);
  if (index != -1) {
    return posts[index];
  }
  return null;
};

const addPosts = (post) => {
  posts.push(post);
  return true;
};
const deletePosts = (post) => {
  posts = posts.filter((obj) => obj.id === post);
  return true;
};
module.exports = {
  posts,
  getPosts,
  getExerciseDetails,
  addPosts,
  deletePosts,
};
