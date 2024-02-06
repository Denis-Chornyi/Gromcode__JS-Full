const elemDiv = document.querySelector(".rect_div");
const elemP = document.querySelector(".rect_p");
const elemSpan = document.querySelector(".rect_span");
const eventsListElem = document.querySelector(".events-list");
const clearButton = document.querySelector(".clear-btn");
const removeHandlers = document.querySelector(".remove-handlers-btn");
const attachHandlers = document.querySelector(".attach-handlers-btn");

eventsListElem.innerHTML = "";

const clearBtn = () => {
  eventsListElem.innerHTML = "";
};
const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};
const logGreenDiv = logTarget.bind(null, "div", "Green");
const logGreenP = logTarget.bind(null, "p", "Green");
const logGreenSpan = logTarget.bind(null, "span", "Green");

const logGreyDiv = logTarget.bind(null, "div", "Grey");
const logGreyP = logTarget.bind(null, "p", "Grey");
const logGreySpan = logTarget.bind(null, "span", "Grey");

const startProcess = () => {
  elemDiv.addEventListener("click", logGreyDiv, true);
  elemP.addEventListener("click", logGreyP, true);
  elemSpan.addEventListener("click", logGreySpan, true);

  elemDiv.addEventListener("click", logGreenDiv);
  elemP.addEventListener("click", logGreenP);
  elemSpan.addEventListener("click", logGreenSpan);
};
startProcess();

clearButton.addEventListener("click", clearBtn);

const stopProcess = () => {
  elemDiv.removeEventListener("click", logGreenDiv);
  elemP.removeEventListener("click", logGreenP);
  elemSpan.removeEventListener("click", logGreenSpan);
  elemDiv.removeEventListener("click", logGreyDiv, true);
  elemP.removeEventListener("click", logGreyP, true);
  elemSpan.removeEventListener("click", logGreySpan, true);
};

removeHandlers.addEventListener("click", stopProcess);

attachHandlers.addEventListener("click", startProcess);
