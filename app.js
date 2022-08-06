//Сравнение массивов

function rad1() {
  document.getElementById("tools1").style.display = "none"; // hide
  //document.getElementById("tools1").style.display = ""; // show
}

function rad2() {
  //document.getElementById("tools1").style.display = "none"; // hide
  document.getElementById("tools1").style.display = ""; // show
}

function rad3() {
  document.getElementById("tools2").style.display = "none"; // hide
  //document.getElementById("tools1").style.display = ""; // show
}

function rad4() {
  //document.getElementById("tools1").style.display = "none"; // hide
  document.getElementById("tools2").style.display = ""; // show
}

function symmetricDifferenceArray() {
  let res = "";
  let arr1 = document
    .querySelector("#ta1")
    .value.replace(/^[\n\r]+|[\n\r]+$/g, "")
    .split(/[\n\r]+/);
  let arr2 = document
    .querySelector("#ta2")
    .value.replace(/^[\n\r]+|[\n\r]+$/g, "")
    .split(/[\n\r]+/);
  if (arr1 == "" || arr2 == "") alert("Введите данные для обработки!");
  else {
    let symDifference = arr1
      .filter((x) => !arr2.includes(x))
      .concat(arr2.filter((x) => !arr1.includes(x)));
    symDifference.forEach((element) => {
      res += `${element}\n`;
    });
    if (res == "") res = "Разность не найдена!";
    return (result.value = res);
  }
}

function compareArrays() {
  let res = "";
  let arr1 = document
    .querySelector("#ta1")
    .value.replace(/^[\n\r]+|[\n\r]+$/g, "")
    .split(/[\n\r]+/);
  let arr2 = document
    .querySelector("#ta2")
    .value.replace(/^[\n\r]+|[\n\r]+$/g, "")
    .split(/[\n\r]+/);
  //   console.log(arr1);
  //   console.log(arr2);
  if (arr1 == "" || arr2 == "") alert("Введите данные для обработки!");
  else {
    let inFirst = arr1.filter((x) => !arr2.includes(x));
    let inSecond = arr2.filter((x) => !arr1.includes(x));
    let inBoth = arr1.filter((x) => arr2.includes(x));
    for (let index of inFirst) {
      res += `${index}\tтолько в первом списке\n`;
    }
    for (let index of inSecond) {
      res += `${index}\tтолько во втором списке\n`;
    }
    for (let index of inBoth) {
      res += `${index}\tв обоих списках\n`;
    }
    return (result.value = res);
  }
}

function reset(...params) {
  for (let param of params) {
    document.getElementById(param).value = "";
  }
}

let tools = document.querySelector("#t1").value;
console.log(tools);
