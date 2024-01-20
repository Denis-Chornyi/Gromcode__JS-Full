export const reverseArray = (arr) => {
  const copyArray = arr.slice();
  if (!Array.isArray(copyArray)) {
    return null;
  }
  return copyArray.reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);
  if (amount > balances[clientIndex]) {
    return -1;
  }
  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

// examples
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50)); // ==> 37 (balances array should be [1400, 37, -6])
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10)); // ==> -1 (balances array should be [1400, 87, -6])
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "Ann", 1200)); // ==> -1 (balances array should be [1400, 87, -6])

export const getAdults = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

// examples
console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
console.log(getAdults({ "John Doe": 19, Tom: 17, Ann: 56 }));
