let obj = {
    arm: {
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
    },
    russian: {
        "г": "g",
        "и": "i",
        "ы": "y",
        "э": "e",
        "х": "kh",
        "ъ": "",
    },
    ukrainian: {
        "г": "h",
        "ґ": "g",
        "и": "y",
        "і": "i",
        "ї": "yi",
        "є": "ye",
        "щ": "shch",
        "х": "kh",
        "ъ": "",
        "'": "",
        "’": "",
        "ʼ": "",
    },
    bulgarian: {
        "г": "g",
        "и": "i",
        "щ": "sht",
        "ъ": "u",
        "х": "h",
    },
    ciril: {
        "а": "a",
        "б": "b",
        "в": "v",
        "д": "d",
        "ж": "zh",
        "з": "z",
        "е": "e",
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
        "ч": "ch",
        "ц": "ts",
        "ш": "sh",
        "ь": "",
        "ю": "yu",
        "я": "ya",

    }
}

const arm = obj.arm
const ciril = obj.ciril
const russian = obj.russian
const ukrainian = obj.ukrainian
const bulgarian = obj.bulgarian

const ru = {
    ...ciril,
    ...russian
}
const bul = {
    ...ciril,
    ...bulgarian
}
const uk = {
    ...ciril,
    ...ukrainian
}
export default { arm, ru, bul, uk }