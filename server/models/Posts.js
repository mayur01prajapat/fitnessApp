const posts = [
  {
    id: 1,
    title: "Oblique twist",
    media: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/7_most_effective_exercises_slideshow/650x350_7_most_effective_exercises_slideshow.jpg",
    type: "image"
  },
  {
    id: 2,
    title: "Benchpress",
    media: "https://www.mensjournal.com/wp-content/uploads/mf/_main2_pushup_3.jpg?w=1200&h=675&crop=1",
    type: "image"
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
