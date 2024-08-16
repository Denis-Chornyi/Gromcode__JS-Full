"use strict";

/**
 * @param {string[]} users
 * @return {promise}
 */

export const getUsersBlogs = async (users) => {
  const requests = users.map((userId) =>
    fetch(`https://api.github.com/users/${userId}`).then((response) =>
      response.json()
    )
  );
  const usersData = await Promise.all(requests);

  return usersData.map((userData) => userData.blog);
};
// examples
getUsersBlogs(["google", "facebook", "reactjs"]).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(["microsoft"]).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
