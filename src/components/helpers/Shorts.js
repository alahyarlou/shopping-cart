export const Shorts = (title) => {
  const newTitle = title.split(" ");
  const titleShow = `${newTitle[0]} ${newTitle[1]}`;
  return titleShow;
};
