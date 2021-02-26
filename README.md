# What is this ?

JavaScript library for converting text to translit

# Installation

`npm i translit-en`

## Simple to use

>  translit("string","lang"), Default Armenian and Russian

`lang`

- `"uk"` -- Ukrainian;
- `"bul"` -- Bulgarian;

```javascript

import translit from 'translit-en'

console.log(translit("Բարև , Здравствуйте")); // barev , zdravstvuyte

console.log(translit("Вітаємо","uk")); // vitayemo, 

```

## Supported languages

Still supporting languages

`Armenian`
`Russian`
`Ukrainian`
`Bulgarian`