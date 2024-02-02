export const getTitle = () => {
  const titleContent = document.querySelector(".title").textContent;
  return titleContent;
};
getTitle();

export const getDescription = () => {
  const aboutContent = document.querySelector(".about").innerText;
  return aboutContent;
};
getDescription();

export const getPlans = () => {
  const plansContent = document.querySelector(".plans").innerHTML;
  return plansContent;
};
getPlans();


export const getGoal = () => {
  const goalContent = document.querySelector(".goal").outerHTML;
  return goalContent;
};
getGoal();
