import lang from './languages.js'

const arm = lang.arm
const ciril = lang.ciril
const russian = lang.russian
const ukrainian = lang.ukrainian

const ru = {
    ...ciril,
    ...russian
}
const uk = {
    ...ciril,
    ...ukrainian
}
const SupLanArray = ["uk"]

function translit(value, opt) {
    let translitText = ""
    let arr = value.toLowerCase().split("")
    if (!opt) {
        for (let i of arr) {
            if (arm[i] !== undefined) {
                translitText += arm[i]
            } else if (ru[i] !== undefined) {
                translitText += ru[i]
            }
            else translitText += i
        }
    } else {
        if (SupLanArray.includes(opt)) {
            for (let i of arr) {
                (uk[i] !== undefined) ? translitText += uk[i] : translitText += i
            }
        } else translitText = "this language not supported!";
    }

    return translitText
}

export default translit