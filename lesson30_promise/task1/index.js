export const addImage = (url) => {
  const promise = new Promise((resolve, reject) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("alt", "User avatar");
    imgElem.src = url;

    const pageElem = document.querySelector(".page");
    pageElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener("load", onImageLoaded);

    imgElem.addEventListener("error", () =>
      reject(new Error("Image load is failed"))
    );
  });
  return promise;
};
const imgSrc =
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

const resultPromise = addImage(imgSrc);
resultPromise.then((data) => console.log(data));
resultPromise.catch((error) => console.log(error));
