import { copyToClipboard } from "./index.js";

const ta1 = document.querySelector("#textareaOne");
const ta2 = document.querySelector("#textareaTwo");
const result = document.querySelector("#textareaThree");

const regReplace = /^[\n\r]+|[\n\r]+$/g;
const regSplit = /[\n\r]+/;

//Пересечение массивов
function interSectionArray() {
  let res = "";
  let arr1 = ta1.value.replace(regReplace, "").split(regSplit);
  let arr2 = ta2.value.replace(regReplace, "").split(regSplit);
  if (arr1 == "" || arr2 == "") return result.value = "Введите данные для обработки!";

    let interSection = arr1.filter((x) => arr2.includes(x));
    
    interSection.length > 0
      ? (res = "Пересечение в первом и во втором списке:\n")
      : (res = "Пересечение не найдено!");
    
      interSection.forEach((el) => {
      res += `${el}\n`;
    });
    
    copyToClipboard(res);
    return result.value = res;
}

//Объединение массивов
function unionArray() {
  let res = "";
  let arr1 = ta1.value.replace(regReplace, "").split(regSplit);
  let arr2 = ta2.value.replace(regReplace, "").split(regSplit);
  if (arr1 == "" || arr2 == "") return result.value = "Введите данные для обработки!";

    //let union = [...data1, ...data2]; //Полное объединение
    let unionArray = [...new Set([...arr1, ...arr2])]; //Только уникальные
    if (unionArray.length > 0) res = "Объединение (без повторов)\n";
    unionArray.forEach((el) => {
      res += `${el}\n`;
    });

    copyToClipboard(res);
    return result.value = res;
}

//Разность массивов (отсутствует справа)
function differenceArrayRight() {
  let res = "";
  let arr1 = ta1.value.replace(regReplace, "").split(regSplit);
  let arr2 = ta2.value.replace(regReplace, "").split(regSplit);
  if (arr1 == "" || arr2 == "") return result.value = "Введите данные для обработки!";

    let diffArray = arr2.filter((x) => !arr1.includes(x));
    
    diffArray.length > 0
      ? (res = "В первом списке отсутствуют:\n")
      : (res = "Разность не найдена!");
    
    diffArray.forEach((el) => {
      res += `${el}\n`;
    });

    copyToClipboard(res);
    return result.value = res;
}

//Разность массивов (отсутствует слева)
function differenceArrayLeft() {
  let res = "";
  let arr1 = ta1.value.replace(regReplace, "").split(regSplit);
  let arr2 = ta2.value.replace(regReplace, "").split(regSplit);

  if (arr1 == "" || arr2 == "") return result.value = "Введите данные для обработки!";

    let diffArray = arr1.filter((x) => !arr2.includes(x));
    
    diffArray.length > 0
      ? (res = "Во втором списке отсутствуют:\n")
      : (res = "Разность не найдена!");
    
    diffArray.forEach((el) => {
      res += `${el}\n`;
    });
    
    copyToClipboard(res);
    return result.value = res;
}

//Симметричная разность массивов
function symmetricDifferenceArray() {
  let res = "";
  let arr1 = ta1.value.replace(regReplace, "").split(regSplit);
  let arr2 = ta2.value.replace(regReplace, "").split(regSplit);
  if (arr1 == "" || arr2 == "") return result.value = "Введите данные для обработки!";

    let symDifference = arr1
      .filter((x) => !arr2.includes(x))
      .concat(arr2.filter((x) => !arr1.includes(x)));
    
      symDifference.length > 0
      ? (res = "Симметрическая разность:\n")
      : (res = "Разность не найдена!");
    
      symDifference.forEach((el) => {
        res += `${el}\n`;
      });

    copyToClipboard(res);
    return result.value = res;
}

//Сравнение массивов
function compareArrays() {
  let res = "";
  let arr1 = ta1.value.replace(regReplace, "").split(regSplit);
  let arr2 = ta2.value.replace(regReplace, "").split(regSplit);
  if (arr1 == "" || arr2 == "") return result.value = "Введите данные для обработки!";

    let inFirst = arr1.filter((x) => !arr2.includes(x));
    let inSecond = arr2.filter((x) => !arr1.includes(x));
    let inBoth = arr1.filter((x) => arr2.includes(x));

    inFirst.forEach(el => {
      res += `${el}\tтолько в первом списке\n`;
    })

    inSecond.forEach(el => {
      res += `${el}\tтолько во втором списке\n`;
    })

    inBoth.forEach(el => {
      res += `${el}\tв обоих списках\n`;
    })

    copyToClipboard(res);
    return result.value = res;
}

export {
  interSectionArray,
  unionArray,
  differenceArrayRight,
  differenceArrayLeft,
  symmetricDifferenceArray,
  compareArrays,
};
