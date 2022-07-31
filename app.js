//Сравнение массивов
function compareArrays() {
  let res = "";
  let data1 = document.querySelector("#ta1").value;
  //console.log(typeof data1);
  //data1.replace(/\n/gi, "#").split(/#/);
  console.log(data1.replace(/\n\r|\n/gi, "#").split(/#/));
  console.log(typeof data1);
  let data2 = document.querySelector("#ta2").value;
  console.log(data2.replace(/^\n\r|\n/gi, "#").split(/#/));

  if (data1 == "" || data2 == "") alert("Введите данные для обработки!");
  else {
    let inFirst = data1.filter((x) => !data2.includes(x));
    //let inFirst = Object.values(data1).filter((x) => !data2.includes(x));
    let inSecond = Object.values(data2).filter((x) => !data1.includes(x));
    let inBoth = Object.values(data1).filter((x) => data2.includes(x));
    console.log(inFirst);
    console.log(inSecond);
    console.log(inBoth);
    for (let i = 0; i < inFirst["length"]; i++) {
      res += inFirst[i] + "\t" + "только в первом списке" + "\n";
    }
    for (let i = 0; i < inSecond["length"]; i++) {
      res += inSecond[i] + "\t" + "только во втором списке" + "\n";
    }
    for (let i = 0; i < inBoth["length"]; i++) {
      res += inBoth[i] + "\t" + "в обоих списках" + "\n";
    }

    return (result.value = res);
  }
}

function reset(...params) {
  for (let param of params) {
    document.getElementById(param).value = "";
  }
}
