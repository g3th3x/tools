// Алгоритм формирования СНИЛС
// Шаблон \d{7,9}
function algoSnils(snils) {
  let ksum = 0;
  let i = 9;
  let snils9 = "0000" + snils.toString();
  snils9 = snils9.substring(snils9.length - 9).split("");
  snils9.forEach((element) => {
    ksum += element * i;
    i--;
  });
  ksum = ksum % 101;
  if (ksum > 99) {
    ksum = "00";
  } else if (ksum < 10) {
    ksum = "0" + ksum;
  }
  return `${snils9
    .join("")
    .replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3")} ${ksum}`;
}

// Алгоритм преобразования C -> 9
// Шаблон d{3}-\d{3}-\d{3} \d{2
function algoSnilsCharTo9(snils) {
  return `${snils.replace(/[- ]/g, "").substring(0, 9)}`;
}

function copyToClipboard(res) {
  if (window.navigator.clipboard.writeText(res))
    document.querySelector("#info").innerHTML =
      "Результат скопирован в буфер обмена";
}

// Валидатор СНИЛС
function validSnils() {
  const arr = document
    .querySelector("#ta1")
    .value.trim()
    .replace(/^[\n\r]+|[\n\r]+$/g, "")
    .split(/[\n\r]+/);
  const regexp1 = /^\d{3}-\d{3}-\d{3} \d{2}$/;
  const regexp2 = /^\d{3}[ -]\d{3}[ -]\d{3}[ -]\d{2}$/;
  const regexp3 = /^(\d{3})[ -](\d{3})[ -](\d{3})[ -](\d{2})$/;
  let res = "";
  let chkSnils, corSnils;
  arr.forEach((snils) => {
    if (regexp1.test(snils)) {
      chkSnils = algoSnils(parseInt(algoSnilsCharTo9(snils)));
      if (snils == chkSnils) {
        res += `${snils}\t${chkSnils}\tОшибок нет\n`;
      } else {
        res += `${snils}\t${chkSnils}\tERR: Контрольные суммы\n`;
      }
    } else if (regexp2.test(snils)) {
      corSnils = snils.replace(regexp3, "$1-$2-$3 $4");
      chkSnils = algoSnils(parseInt(algoSnilsCharTo9(corSnils)));
      if (corSnils == chkSnils) {
        res += `${snils}\t${corSnils}\tWRN: Дефисы или пробелы\n`;
      } else {
        res += `${snils}\t${corSnils}\tERR: Дефисы, пробелы и контрольные суммы\n`;
      }
    } else {
      res += `${snils}\t\tERR: Формат СНИЛС\n`;
    }
  });
  copyToClipboard(res);
  return (result.value = res);
}

// Конвертер СНИЛС C -> 9
function convSnilsCharTo9() {
  const arr = document
    .querySelector("#ta1")
    .value.trim()
    .replace(/^[\n\r]+|[\n\r]+$/g, "")
    .split(/[\n\r]+/);
  const regexp = /^\d{3}-\d{3}-\d{3} \d{2}$/;
  let res = "";
  for (let snils of arr) {
    if (regexp.test(snils)) {
      res += `${algoSnilsCharTo9(snils)}\n`;
    } else {
      res += `ERR: Формат СНИЛС (${snils})\n`;
    }
  }
  copyToClipboard(res);
  return (result.value = res);
}

// Конвертер СНИЛС 9 -> C
function convSnils9ToChar() {
  const arr = document
    .querySelector("#ta1")
    .value.trim()
    .replace(/^[\n\r]+|[\n\r]+$/g, "")
    .split(/[\n\r]+/);
  const regexp = /^\d{7,9}$/;
  let res = "";
  for (let snils of arr) {
    if (regexp.test(snils)) {
      res += `${algoSnils(snils)}\n`;
    } else {
      res += `ERR: Формат СНИЛС (${snils})\n`;
    }
  }
  copyToClipboard(res);
  return (result.value = res);
}

// Конвертер СНИЛС 11 -> C
function convSnils11ToChar() {
  const arr = document
    .querySelector("#ta1")
    .value.trim()
    .replace(/^[\n\r]+|[\n\r]+$/g, "")
    .split(/[\n\r]+/);
  const regexp1 = /^\d{11}$/;
  const regexp2 = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  let res = "";
  let chkSnils, corSnils;
  for (let snils of arr) {
    if (regexp1.test(snils)) {
      corSnils = snils.replace(regexp2, "$1-$2-$3 $4");
      chkSnils = algoSnils(parseInt(algoSnilsCharTo9(corSnils)));
      if (corSnils == chkSnils) {
        res += `${chkSnils}\n`;
      } else {
        res += `${chkSnils}\tERR: Контрольные суммы (${corSnils})\n`;
      }
    } else {
      res += `${snils}\tERR: Формат СНИЛС\n`;
    }
  }
  copyToClipboard(res);
  return (result.value = res);
}

// Конвертер регистрационного номера ПФР
function convPayNumber() {
  const arr = document
    .querySelector("#ta1")
    .value.trim()
    .replace(/^[\n\r]+|[\n\r]+$/g, "")
    .split(/[\n\r]+/);
  const regexp1 = /^\d{3}[-]\d{3}[-]\d{6}$/;
  const regexp2 = /^\d{1,3}(?<![0]{3})\d{3}(?<![0]{3})\d{6}$/;
  let corPayNumber;
  let res = "";
  for (let payNumber of arr) {
    if (regexp1.test(payNumber)) {
      res += `${payNumber}\t${payNumber}\n`;
    } else if (regexp2.test(payNumber)) {
      corPayNumber = "00" + payNumber.toString();
      console.log(corPayNumber);
      res += `${payNumber}\t${corPayNumber
        .substring(corPayNumber.length - 12)
        .replace(/^(\d{3})(\d{3})(\d{6})$/, "$1-$2-$3")}\n`;
    } else {
      res += `${payNumber}\tERR: Нарушен формат входящих данных\n`;
    }
  }
  copyToClipboard(res);
  return (result.value = res);
}
