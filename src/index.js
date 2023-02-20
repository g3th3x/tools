document.querySelector("#ta2").style.display = "none";

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

document.querySelectorAll("input[name='exec']").forEach((input) => {
  input.addEventListener("change", (e) => {
    showHide(e.target.value);
  });
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

let resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => {
  //   console.log("Yeap! I'm here!");
  let textareaEl = document.querySelectorAll("textarea");
  textareaEl.forEach((elem) => {
    elem.value = "";
  });
  document.querySelector("#info").textContent = "";
});

function copyToClipboard(res) {
  if (window.navigator.clipboard.writeText(res))
    document.querySelector("#info").textContent =
      "Результат скопирован в буфер обмена";
}
