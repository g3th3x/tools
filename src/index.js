import * as arrayTools from "./array-tools.js";
import * as pfrTools from "./pfr-tools.js";

const selectEl = document.querySelector("select");
const textareaTwo = document.querySelector("#textareaTwo");
const btnReset = document.querySelector("#btnReset");
const btnHandle = document.querySelector("#btnHandle");

selectEl.addEventListener("change", () => {
  selectEl.value > 0 && selectEl.value < 6
    ? textareaTwo.setAttribute("disabled", true)
    : textareaTwo.removeAttribute("disabled");
});

btnReset.addEventListener("click", () => {
  const textareaEl = document.querySelectorAll("textarea");
  textareaEl.forEach((elem) => {
    elem.value = "";
  });
});

btnHandle.addEventListener("click", () => {
  const func = [
    pfrTools.convSnils9ToChar,
    pfrTools.convSnilsCharTo9,
    pfrTools.convSnils11ToChar,
    pfrTools.validSnils,
    pfrTools.convPayNumber,
    arrayTools.unionArray,
    arrayTools.interSectionArray,
    arrayTools.differenceArrayRight,
    arrayTools.differenceArrayLeft,
    arrayTools.compareArrays,
    arrayTools.symmetricDifferenceArray,
  ];

  const index = Number(selectEl.value) - 1;
  func[index]();
});

function copyToClipboard(res) {
  if (window.navigator.clipboard.writeText(res)) {
    const liveToastEl = document.querySelector("#liveToast");
    const toast = new bootstrap.Toast(liveToastEl);
    toast.show();
  }
}

export { copyToClipboard };
