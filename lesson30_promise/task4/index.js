const failedPromise = new Promise((resolve, reject) => {
  reject(new Error("Oops, error!"));
  /* ...code here */
});
/*
 * выведите в консоль ошибку в ф-ции onError
 */

failedPromise.catch(function onError(error) {
  console.log(error);
  /* ...code here */
});
