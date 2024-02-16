import { copyToClipboard } from "./index.js";

const ta1 = document.querySelector("#textareaOne");
const result = document.querySelector("#textareaThree");

const regReplace = /^[\n\r]+|[\n\r]+$/g;
const regSplit = /[\n\r]+/;

// Дата из 31.12.2024 в 2024-12-31
function dateRuToEn() {
    const arr = ta1.value.trim().replace(regReplace, "").split(regSplit);
    const regexp = /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.\d{4}$/;
    let res = "";

    if (arr == "") return result.value = "Введите данные для обработки!";

    arr.forEach(el => {
        (regexp.test(el)) ? 
            res += `${el.split(".").reverse().join("-")}\n` : 
            res += `${el}\tERR: DATE FORMAT\n`;
    });

    copyToClipboard(res);
    return result.value = res;
}

// Дата из 2024-12-31 в 31.12.2024
function dateEnToRu() {
    const arr = ta1.value.trim().replace(regReplace, "").split(regSplit);
    const regexp = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
    let res = "";

    if (arr == "") return result.value = "Введите данные для обработки!";

    arr.forEach(el => {
        (regexp.test(el)) ? 
            res += `${el.split("-").reverse().join(".")}\n` : 
            res += `${el}\tERR: DATE FORMAT\n`;
    });

    copyToClipboard(res);
    return result.value = res;
}

export { 
    dateRuToEn,
    dateEnToRu 
};