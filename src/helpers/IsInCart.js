export const IsInCart = (state, id) => {
  const res = !!state.selectedItems.find((item) => item.id === id);
  return res;
};
