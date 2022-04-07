const digitOne = document.querySelector(".digit1");
const digitTwo = document.querySelector(".digit2");
const digitThree = document.querySelector(".digit3");
const submitButton = document.querySelector(".submission");
const outputText = document.querySelector(".output");
let numbersArray = [];

digitOne.addEventListener("keyup", () => {
  filterDigit1 = digitOne.value.replace(/[^0-9]/gi, "");
  filterDigit1 = parseInt(filterDigit1);
  numbersArray.push(filterDigit1);
  //console.log(filterDigit1);
});

digitTwo.addEventListener("keyup", () => {
  filterDigit2 = digitTwo.value.replace(/[^0-9]/gi, "");
  filterDigit2 = parseInt(filterDigit2);
  numbersArray.push(filterDigit2);
  //console.log(filterDigit2);
});

digitThree.addEventListener("keyup", () => {
  filterDigit3 = digitThree.value.replace(/[^0-9]/gi, "");
  filterDigit3 = parseInt(filterDigit3);
  numbersArray.push(filterDigit3);
  if (filterDigit1 && filterDigit2 && filterDigit3) {
    console.log(numbersArray);
    return submitButton.classList.add("active");
  }
  submitButton.classList.remove("active");
  //console.log(filterDigit3);
});
let maxNumber;
submitButton.addEventListener("click", () => {
  // console.log("Clicked");
  if (filterDigit1 >= filterDigit2 && filterDigit1 >= filterDigit3) {
    maxNumber = filterDigit1;
  } else if (filterDigit2 >= filterDigit1 && filterDigit2 >= filterDigit3) {
    maxNumber = filterDigit2;
  } else {
    maxNumber = filterDigit3;
  }

  console.log(maxNumber);
  return (outputText.innerHTML = `<span>${maxNumber}</span> is the Maximum Number`);
});
