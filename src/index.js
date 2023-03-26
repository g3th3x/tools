const selectEl = document.querySelector("select");

const btnHandle = document.querySelector("#btnHandle");
btnHandle.addEventListener("click", () => {
  executor(selectEl.value);
});

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

let btnReset = document.querySelector("#btnReset");
btnReset.addEventListener("click", () => {
  //   console.log("Yeap! I'm here!");
  let textareaEl = document.querySelectorAll("textarea");
  textareaEl.forEach((elem) => {
    elem.value = "";
  });
});

function copyToClipboard(res) {
  if (window.navigator.clipboard.writeText(res)) {
    const liveToastEl = document.querySelector("#liveToast");
    const toast = new bootstrap.Toast(liveToastEl);
    toast.show();
  }
}
