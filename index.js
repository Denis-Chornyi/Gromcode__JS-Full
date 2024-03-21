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
const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

function getTasksList() {
  // put your code here
  return fetch(baseUrl).then((response) => response.json());
}

function getTaskById(taskId) {
  // put your code here
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((taskData) => taskData.filter((obj) => obj.id === taskId));
}

// examples
getTasksList().then((tasksList) => {
  console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
});

getTaskById("2").then((taskData) => {
  console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
});
