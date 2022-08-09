// Алгоритм формирования СНИЛС
function makeSnilsC(snils) {
  let ksum = 0;
  let i = 9;
  let snils9 = "0000" + snils.toString();
  snils9 = snils9.substring(snils9.length - 9).split("");
  snils9.forEach((element) => {
    ksum += element * i;
    i--;
  });
  ksum = ksum % 101;
  //if ((ksum == 100) | (ksum == 101)) {
  if (ksum > 99) {
    ksum = "00";
  } else if (ksum < 10) {
    ksum = "0" + ksum;
  }
  return `${snils9
    .join("")
    .replace(/([0-9]{3})([0-9]{3})([0-9]{3})/, "$1-$2-$3")} ${ksum}`;
}

function runMakeSnilsC() {
  let res = "";
  let arr1 = document
    .querySelector("#ta1")
    .value.replace(/^[\n\r]+|[\n\r]+$/g, "")
    .split(/[\n\r]+/);
  for (let index of arr1) {
    res += `${makeSnilsC(index)}\n`;
  }
  document.querySelector("#ta2").innerHTML = res;
  window.navigator.clipboard.writeText(res);
}
