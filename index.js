// const elemDiv = document.querySelector(".rect_div");
// const elemP = document.querySelector(".rect_p");
// const elemSpan = document.querySelector(".rect_span");
// const eventsListElem = document.querySelector(".events-list");
// const clearButton = document.querySelector(".clear-btn");
// const removeHandlers = document.querySelector(".remove-handlers-btn");
// const attachHandlers = document.querySelector(".attach-handlers-btn");

// eventsListElem.innerHTML = "";

// const clearBtn = () => {
//   eventsListElem.innerHTML = "";
// };
// const logTarget = (text, color) => {
//   eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
// };
// const logGreenDiv = logTarget.bind(null, "div", "Green");
// const logGreenP = logTarget.bind(null, "p", "Green");
// const logGreenSpan = logTarget.bind(null, "span", "Green");

// const logGreyDiv = logTarget.bind(null, "div", "Grey");
// const logGreyP = logTarget.bind(null, "p", "Grey");
// const logGreySpan = logTarget.bind(null, "span", "Grey");

// const startProcess = () => {
//   elemDiv.addEventListener("click", logGreyDiv, true);
//   elemP.addEventListener("click", logGreyP, true);
//   elemSpan.addEventListener("click", logGreySpan, true);

//   elemDiv.addEventListener("click", logGreenDiv);
//   elemP.addEventListener("click", logGreenP);
//   elemSpan.addEventListener("click", logGreenSpan);
// };
// startProcess();

// clearButton.addEventListener("click", clearBtn);

// const stopProcess = () => {
//   elemDiv.removeEventListener("click", logGreenDiv);
//   elemP.removeEventListener("click", logGreenP);
//   elemSpan.removeEventListener("click", logGreenSpan);
//   elemDiv.removeEventListener("click", logGreyDiv, true);
//   elemP.removeEventListener("click", logGreyP, true);
//   elemSpan.removeEventListener("click", logGreySpan, true);
// };

// removeHandlers.addEventListener("click", stopProcess);

// attachHandlers.addEventListener("click", startProcess);
const divElem = document.querySelector("div");
const pElem = document.querySelector("p");
const spanElem = document.querySelector("span");
const eventsListElem = document.querySelector(".events-list");

const logEvent = (text, color) => {
  const spanElem = document.createElement("span");
  spanElem.style = `color: ${color}; margin-left: 8px;`;
  spanElem.textContent = text;
  eventsListElem.appendChild(spanElem);
};

const logGreenDiv = logEvent.bind(null, "div", "green");
const logGreyDiv = logEvent.bind(null, "div", "grey");

const logGreenP = logEvent.bind(null, "p", "green");
const logGreyP = logEvent.bind(null, "p", "grey");

const logGreenSpan = logEvent.bind(null, "span", "green");
const logGreySpan = logEvent.bind(null, "span", "grey");

const attachHandlers = () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);
  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);
  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
};

const attachHandlersBtnElem = document.querySelector(".attach-handlers-btn");
attachHandlersBtnElem.addEventListener("click", attachHandlers);

const removeHandlers = () => {
  divElem.removeEventListener("click", logGreenDiv);
  divElem.removeEventListener("click", logGreyDiv, true);
  pElem.removeEventListener("click", logGreenP);
  pElem.removeEventListener("click", logGreyP, true);
  spanElem.removeEventListener("click", logGreenSpan);
  spanElem.removeEventListener("click", logGreySpan, true);
};

const removeHandlersBtnElem = document.querySelector(".remove-handlers-btn");
removeHandlersBtnElem.addEventListener("click", removeHandlers);

const clearBoard = () => {
  eventsListElem.innerHTML = "";
};

const clearBtnElem = document.querySelector(".clear-btn");
clearBtnElem.addEventListener("click", clearBoard);

document.addEventListener("DOMContentLoaded", () => {
  attachHandlers();
});
