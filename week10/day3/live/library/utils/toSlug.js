function toSlug(str) {
  return str.trim().split(" ").join("-").toLowerCase();
}

module.exports = { toSlug };
