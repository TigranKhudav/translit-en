let arm = {
    "ա": "a",
    "բ": "b",
    "գ": "g",
    "դ": "d",
    "ե": "e",
    "զ": "z",
    "է": "e",
    "ը": "y",
    "թ": "t",
    "ժ": "zh",
    "ի": "i",
    "լ": "l",
    "խ": "kh",
    "ծ": "ts",
    "կ": "k",
    "հ": "h",
    "ձ": "dz",
    "ղ": "gh",
    "ճ": "ch",
    "մ": "m",
    "յ": "y",
    "ն": "n",
    "շ": "sh",
    "ո": "o",
    "չ": "ch",
    "պ": "p",
    "ջ": "յ",
    "ռ": "ṛ",
    "ս": "s",
    "վ": "v",
    "տ": "t",
    "ր": "r",
    "ց": "c",
    "ու": "u",
    "փ": "p",
    "ք": "q",
    "և": "ev",
    "օ": "o",
    "ֆ": "f"
}
let ru = {
    "а": "a",
    "б": "b",
    "в": "v",
    "ґ": "g",
    "д": "d",
    "е": "e",
    "ё": "yo",
    "ж": "zh",
    "з": "z",
    "и": "i",
    "й": "y",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "kh",
    "ц": "ts",
    "ч": "ch",
    "ш": "sh",
    "щ": "shch",
    "ъ": "",
    "ы": "y",
    "ь": "",
    "э": "e",
    "ю": "yu",
    "я": "ya",
}
function translit(value) {
    let translitText = ""
    let arr = value.toLowerCase().split("")
    for (let i of arr) {
        if (arm[i] !== undefined) {
            translitText += arm[i]
        } else if (ru[i] !== undefined) {
            translitText += ru[i]
        }
        else {
            translitText += i
        }
    }
    return translitText
}

export { translit }