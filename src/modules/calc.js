export const calc = (price = 100) => {
  const calculator = document.querySelector(".calculator");
  const calcType = document.getElementById("calc-type");
  const calcTypeMaterial = document.getElementById("calc-type-material");
  const squareInput = document.getElementById("calc-input");
  const calcTotal = document.getElementById("calc-total");

  if (
    !calculator ||
    !calcType ||
    !calcTypeMaterial ||
    !squareInput ||
    !calcTotal
  ) {
    return;
  }

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcTypeMaterialValue =
      +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;

    let totalValue = 0;

    if (calcType.value !== "--" && calcTypeMaterial.value !== "--") {
      totalValue =
        calcTypeValue * calcTypeMaterialValue * squareInput.value * price;
      console.log(totalValue);
    } else {
      totalValue = 0;
    }

    calcTotal.value = totalValue;
  };

  calculator.addEventListener("input", (e) => {
    e.preventDefault();

    if (
      e.target === calcType ||
      e.target === calcTypeMaterial ||
      e.target === squareInput ||
      e.target === calcTotal
    ) {
      countCalc();
      squareInput.value = squareInput.value.replace(/\D+/, "");
    }
  });
};
