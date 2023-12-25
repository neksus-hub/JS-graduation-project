import { sendForm } from "./sendForm";

export const callASpecialistValid = () => {
  const form = document.getElementById("call-a-spec-form");
  const nameInput = form.querySelector(".form-control[name=fio]");
  const phoneInput = form.querySelector(".form-control[name=phone]");

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

    if (phoneInput.value.length > 16) {
      onError(phoneInput, "Максимум 16 символов");
    }

    if (!/[^а-яa-zA-ZА-Я]/g.test(nameInput.value)) {
      nameInput.style.border = "1px solid #dfdfdf";
    } else {
      onError(nameInput, "Только буквы");
    }

    if (!/[^\d+]/g.test(phoneInput.value)) {
      phoneInput.style.border = "1px solid #dfdfdf";
    } else {
      onError(phoneInput, `Только цифры и "+"!`);
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
    success.textContent = "Заявка отправлена! Ожидайте специалиста!";
    nameInput.insertAdjacentElement("beforebegin", success);

    sendForm("https://jsonplaceholder.typicode.com/posts", user).catch(
      (error) => console.log(error)
    );
  };

  const clear = () => {
    let errors = form.querySelectorAll("p");

    errors.forEach((item) => {
      item.remove();
    });
  };
};
