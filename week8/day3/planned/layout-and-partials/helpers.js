function addSlug(movie) {
  const slug = movie.title
    .toLowerCase()
    .replace(/[:",']/g, "")
    .split(" ")
    .join("-");

  console.log(movie.title);
  return {
    ...movie,
    slug,
  };
}

module.exports = { addSlug };
