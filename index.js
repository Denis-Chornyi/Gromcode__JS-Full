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
const logGreenDiv = logTarget.bind(null, "DIV", "Green");
const logGreenP = logTarget.bind(null, "P", "Green");
const logGreenSpan = logTarget.bind(null, "SPAN", "Green");

const logGreyDiv = logTarget.bind(null, "DIV", "Grey");
const logGreyP = logTarget.bind(null, "P", "Grey");
const logGreySpan = logTarget.bind(null, "SPAN", "Grey");

elemDiv.addEventListener("click", logGreyDiv, true);
elemP.addEventListener("click", logGreyP, true);
elemSpan.addEventListener("click", logGreySpan, true);

elemDiv.addEventListener("click", logGreenDiv);
elemP.addEventListener("click", logGreenP);
elemSpan.addEventListener("click", logGreenSpan);

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
const startProcess = () => {
  removeHandlers.removeEventListener("click", stopProcess);
};
attachHandlers.addEventListener("click", startProcess);

