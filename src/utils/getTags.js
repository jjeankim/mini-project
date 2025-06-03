export const getTagList = (str) =>
  str
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)
    .map((tag) => `#${tag}`)
    .join("")
   
