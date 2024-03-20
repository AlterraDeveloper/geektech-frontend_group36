console.log("Lesson 6");

// DOM - Document Object Model

let _document = {
    head: {
        meta: {},
        link: {},
        title: {
            value: "Title"
        }
    },
    body: {
        style: {
            background: "blue",
            width: "100px"
        },
        div: {
            children: [
                {
                    div: {}
                }
            ]
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor = "blue"
    console.log(document.body.style.backgroundColor);
})

// URL - Unified Resource Locator
// URI - Unified Resource Identifier

// HTTP(s - secure) - Hyper Text Transfer Protocol
// https://kinopoisk.ru/comedy/117589?lang=ru

// PARSING HTML...
// HTML -> DOM
// JS -> V8

let birthDate = new Date("01.15.2000");

let birthDate2 = {
    day: 15,
    month: 1,
    year: 2000
}