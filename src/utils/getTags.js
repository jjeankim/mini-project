export const getTagList = (str) =>
  str
    .split(",")
    .map((tag) => tag.trim())
    .map((tag) => `#${tag}`)
    .join(" ");
