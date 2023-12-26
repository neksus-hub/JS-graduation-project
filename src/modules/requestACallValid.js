import { sendForm } from "./sendForm";

export const requestACallValid = () => {
  const form = document.getElementById("request-a-call");
  const nameInput = form.querySelector(".form-control[name=fio]");
  const phoneInput = form.querySelector(".form-control[name=phone]");

  console.log(form);
  console.log(nameInput);
  console.log(phoneInput);

  let isError = true;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    isError = true;

    clear();

    if (nameInput.value === "") {
      onError(nameInput, "Полe должно быть заполнено!");
    }

    if (phoneInput.value === "") {
      onError(phoneInput, "Полe должно быть заполнено!");
    }

    if (!/[^а-яa-zA-ZА-Я]/g.test(nameInput.value)) {
      nameInput.style.border = "1px solid #dfdfdf";
    } else {
      onError(nameInput, "Только буквы");
    }

    if (isError === true) {
      onSuccess();
    }
  });

  const onError = (input, errorText) => {
    isError = false;

    let error = document.createElement("p");

    input.value = "";

    input.style.border = "1px solid red";
    error.style.color = "red";
    error.textContent = errorText;
    input.insertAdjacentElement("beforebegin", error);

    setTimeout(clear, 3000);
  };

  const onSuccess = () => {
    let success = document.createElement("p");

    let user = {
      name: nameInput.value,
      phone: phoneInput.value,
    };

    nameInput.value = "";
    phoneInput.value = "";

    nameInput.style.border = "1px solid green";
    phoneInput.style.border = "1px solid green";
    success.style.color = "green";
    success.textContent = "Успешно! Ожидайте специалиста!";
    nameInput.insertAdjacentElement("beforebegin", success);

    sendForm("https://jsonplaceholder.typicode.com/posts", user).catch(
      (error) => console.log(error)
    );

    setTimeout(clear, 3000);
  };

  const clear = () => {
    let errors = form.querySelectorAll("p");

    errors.forEach((item) => {
      item.remove();
    });
  };
};
