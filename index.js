// const findSolution = (target) => {
//   function find(current, history) {
//     if (current === target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return (
//         find(current + 5, `(${history} + 5)`) ||
//         find(current * 3, `(${history} * 3)`)
//       );
//     }
//   }
//   return find(1, "1");
// };
// console.log(findSolution(104))

// ///////////////////////////////////

const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");

const fetchUserData = (userName) =>
  fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );

const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : "";
};

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then((userData) => renderUserData(userData));
};

showUserBtnElem.addEventListener("click", onSearchUser);
