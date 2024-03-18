export const addImageV2 = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "My Photo");
  imgElem.src = imgSrc;
  const containerElem = document.querySelector(".page");
  containerElem.append(imgElem);

  const { width, height } = imgElem;

  const notLoaded = "Image load failed";

  imgElem.addEventListener("load", callback(null, { width, height }));
  imgElem.addEventListener("error", callback(new Error(notLoaded)));
};
