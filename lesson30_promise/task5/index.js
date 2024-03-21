import { addImage } from "./addImage.js";

export const addImageV2 = (url) => {
  return new Promise((resolve, reject) => {
    addImage(url, (error, script) => {
      if (error) {
        reject(error);
      }
      resolve(script);
    });
  });
};

addImageV2("https://server.com/image.png")
  .then((data) => console.log(data)) // ==> { width: 200, height: 100 }
  .catch((error) => console.log(error)); // ==> 'Image load failed'
