export const validForm = () => {
  const nameInput = document.querySelector(".form-control[name=fio]");
  const phoneInput = document.querySelector(".form-control[name=phone]");
  const form = document.querySelector(".form-horizontal");

  let isError = false;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    clearErrors();

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
    input.style.border = "1px solid red";
    error.style.color = "red";
    error.textContent = errorText;
    input.insertAdjacentElement("beforebegin", error);
  };

  const onSuccess = () => {
    let success = document.createElement("p");
    nameInput.style.border = "1px solid green";
    phoneInput.style.border = "1px solid green";
    success.style.color = "green";
    success.textContent = "Данные упешно отправлены";
    nameInput.insertAdjacentElement("beforebegin", success);
  };

  const sendForm = () => {};

  const clearErrors = () => {
    let errors = form.querySelectorAll("p");

    errors.forEach((item) => {
      item.remove();
    });
  };
};
