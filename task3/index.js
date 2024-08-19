const baseUrl = "https://6613d8a753b0d5d80f6885e7.mockapi.io/api/v7/users";

const formElem = document.querySelector(".login-form");
const submitBtnElem = document.querySelector(".submit-button");
const errorTextElem = document.querySelector(".error-text");

const reportValidity = () => {
  submitBtnElem.disabled = !formElem.reportValidity();
};

const postData = (event) => {
  event.preventDefault();
  const newUser = Object.fromEntries(new FormData(formElem));

  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((data) => {
      formElem.reset();
      submitBtnElem.disabled = true;
      alert(JSON.stringify(data));
    })
    .catch(() => {
      errorTextElem.textContent = "Failed to create user";
    });
};

formElem.addEventListener("input", reportValidity);
formElem.addEventListener("submit", postData);
