const form = document.querySelector("form");
form.addEventListener(
  "submit",
  (e) => {
    const data = new FormData(form);
    data.forEach((elem) => executor(elem));
    e.preventDefault();
  },
  false
);

function executor(exec) {
  switch (exec) {
    case "1":
      convSnils9ToChar();
      break;
    case "2":
      convSnilsCharTo9();
      break;
    case "3":
      convSnils11ToChar();
      break;
    case "4":
      validSnils();
      break;
    case "5":
      convPayNumber();
      break;
    case "6":
      unionArray();
      break;
    case "7":
      interSectionArray();
      break;
    case "8":
      differenceArrayRight();
      break;
    case "9":
      differenceArrayLeft();
      break;
    case "10":
      compareArrays();
      break;
    case "11":
      symmetricDifferenceArray();
      break;
  }
}

function supfunction(event) {
  //     // console.log(`Checked radio with ID = ${event.target.id}`);
  //     console.log(`Checked radio with ID = ${event.target.value}`);
  showHide(event.target.value);
}
document.querySelectorAll("input[name='exec']").forEach((input) => {
  input.addEventListener("change", supfunction);
  // input.addEventListener("change", showHide(event.target.value));
});

function showHide(exec) {
  switch (exec) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
      document.querySelector("#ta2").style.display = "none";
      break;
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
      document.querySelector("#ta2").style.display = "";
      break;
    default:
  }
}

function reset(...params) {
  //   console.log("Yeap! I'm here!");
  for (let param of params) {
    document.getElementById(param).value = "";
  }
  document.querySelector("#info").innerHTML = "";
}

function copyToClipboard(res) {
  if (window.navigator.clipboard.writeText(res))
    document.querySelector("#info").innerHTML =
      "Результат скопирован в буфер обмена";
}
