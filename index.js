import lang from './languages.js'

const arm = lang.arm
const ru = lang.ru
const uk = lang.uk
const bul = lang.bul

const SupLanObj = { "uk": uk, "bul": bul }

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
        if (opt in SupLanObj) {
            let lanObj = SupLanObj[opt]
            for (let i of arr) {
                (lanObj[i] !== undefined) ? translitText += lanObj[i] : translitText += i
            }
        } else translitText = "this language not supported!";
    }
    return translitText
}

export default translit