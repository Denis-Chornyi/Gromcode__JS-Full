// ///////////////////////////////
// ///////////////////////////////
// const calendarEvent = document.createElement("div");
// calendarEvent.classList.add("event");
// calendarEvent.setAttribute("data-event-id", Math.random());
// calendarEvent.style.position = absolute;
// const endTime = event.target.name.contains("endTime");
// const startTime = event.target.name.contains("startTime");
// let resultHeight = endTime - startTime;
// resultHeight /= 60000;
// calendarEvent.style.height = resultHeight.toFixed();
// const calendarEventTitle = document.createElement("div");
// calendarEventTitle.classList.add("event__title");
// const title = event.target.classList.contains("event-form__field-title");
// calendarEventTitle.textContent = title.value;
// const calendarEventTime = document.createElement("div");
// calendarEventTime.classList.add("event__time");
// calendarEventTime.textContent = `${startTime.value} - ${endTime.value}`;
// return (weekElem.innerHTML = calendarEvent);
// function getPrimess(num) {
//   for (let i = 2; i <= num; i += 1) {
//     let isPrimeNumber = true;
//     for (let j = 2; j < i; j += 1) {
//       if (i % j === 0) {
//         isPrimeNumber = false;
//         break;
//       }
//     }
//     if (isPrimeNumber) console.log(i);
//   }
// }
// getPrimess(20);
const counterElem = document.querySelector(".counter");
const counterValueElem = document.querySelector(".counter__value");

const onCounterChange = (event) => {
  const isButton = event.target.classList.contains("counter__button");
  if (!isButton) {
    return;
  }
  const { action } = event.target.dataset;

  const oldValue = +counterValueElem.textContent;

  const newValue = action === "decrease" ? oldValue - 1 : oldValue + 1;

  localStorage.setItem("counterValue", newValue);

  counterValueElem.textContent = newValue;
};
counterElem.addEventListener("click", onCounterChange);

const onStorageChange = (event) => {
  counterValueElem.textContent = event.newValue;
};
window.addEventListener("storage", onStorageChange);

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem("counterValue") || 0;
};
document.addEventListener("DOMContentLoaded", onDocumentLoaded);
