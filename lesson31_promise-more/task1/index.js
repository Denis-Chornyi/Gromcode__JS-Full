export const requestUserData = (userId) =>
  new Promise((resolve, rejects) => {
    if (userId === "broken") {
      setTimeout(() => {
        rejects(new Error("User not found"));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: "John",
          age: 17,
          userId,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });

requestUserData("userId777")
  .catch((error) => console.log(error))
  .then((data) => console.log(data));
