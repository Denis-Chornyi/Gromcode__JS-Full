export const getItemList = () => {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
};
getItemList();

export const getItemsArray = () => {
  const elementsArray = Array.from(document.querySelectorAll(".tool"));
  console.dir(elementsArray);
  return elementsArray;
};
getItemsArray();
