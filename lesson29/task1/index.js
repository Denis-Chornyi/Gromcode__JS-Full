export const addImage = (url, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "User avatar");
  imgElem.src = url;

  const pageElem = document.querySelector(".page");
  pageElem.append(imgElem);

  imgElem.addEventListener("load", () => {
    callback(null, imgElem);
  });

  imgElem.addEventListener("error", () => callback("Image load is failed"));
};
const imgSrc =
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

// callack function
const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = data;
  const sizeElem = document.querySelector(".image-size");

  sizeElem.textContent = `${width} x ${height}`;
};
addImage(imgSrc, onImageLoaded);

// examples
// addImage(
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
//   onImageLoaded,
// );

