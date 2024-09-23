import { copyToClipboard } from "./index.js";

const ta1 = document.querySelector("#textareaOne");
const result = document.querySelector("#textareaThree");

// Конвертер
function hexLetterConverter() {
    const regReplace = /^[\n\r]+|[\n\r]+$/g
    const str = ta1.value.trim().replace(regReplace, "")

    if (str === '') {
        return result.value = "Введите данные для обработки!";
    }

    const alfabet = {
        'C1':'а', 'C2':'б', 'D7':'в', 'C7':'г', 'C4':'д', 'C5':'е', '':'ё', 'D6':'ж', 'DA':'з', 'C9':'и',
        'CA':'й', 'CB':'к', 'CC':'л', 'CD':'м', 'CE':'н', 'CF':'о', 'D0':'п', 'D2':'р', 'D3':'с', 'D4':'т',
        'D5':'у', 'C6':'ф', 'C8':'х', 'C3':'ц', 'DE':'ч', 'DB':'ш', 'DD':'щ', '':'ъ', 'D9':'ы', 'D8':'ь',
        'DC':'э', 'C0':'ю', 'D1':'я', 'E1':'А', 'E2':'Б', 'F7':'В', '':'Г', 'E4':'Д', 'E5':'Е', '':'Ё',
        '':'Ж', 'FA':'З', 'E9':'И', 'EA':'Й', 'EB':'К', 'EC':'Л', 'ED':'М', 'EE':'Н', 'EF':'О', 'F0':'П',
        'F2':'Р', 'F3':'С', 'F4':'Т', 'F5':'У', 'E6':'Ф', 'E8':'Х', '':'Ц', 'FE':'Ч', '':'Ш', '':'Щ',
        '':'Ъ', 'F9':'Ы', 'F8':'Ь', '':'Э', '':'Ю', '':'Я'
    }

    function convertStr(alfabet, lsi) {  // lsi - link string input
        // const r = RegExp('\<([^\>]*)\>', 'g');
        const r = RegExp('\<([^\>][0-9A-F][0-9A-F]*)\>', 'g');
        let s = '';
        let idx = 0

        for (let a; (a = r.exec(lsi)) !== null;) {
            s += (lsi.substring(idx, r.lastIndex - a[0].length) + alfabet[a[1]])
            idx = r.lastIndex
        }

        if (idx < lsi.length) s += lsi.substring(idx, lsi.length)

        return s
    }
    
    const res = convertStr(alfabet, str)

    copyToClipboard(res);
    return result.value = res;
}

export { 
    hexLetterConverter
};