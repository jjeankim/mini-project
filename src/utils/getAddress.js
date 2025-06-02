export const getAddress = (str) => {
  return str.split(" ").slice(0, 3);
};