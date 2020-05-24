/**************************************
DOM
**************************************/
textPartOne = document.querySelector(".text-part-one")
textPartTwo = document.querySelector(".text-part-two")

let songTextArray = [
    "We're no strangers to love",
    "You know the rules and so do I",
    "A full commitment's what I'm thinking of",
    "I just wanna tell you how I'm feeling",
    "Gotta make you understand"
]


isEvenArray(textPartOne, songTextArray)
isOddArray(textPartTwo, songTextArray)

function isEvenArray(domElement, array) {

    array.forEach(str => {
        let newStr = str.split("").map((letter, i) => i % 2 ? "&nbsp" : letter).join("") + "<br>";

        domElement.innerHTML += newStr;
    });
    // for (let i = 0; i < array.length; i++) {
    //     return array[i].split("").map((letter, i) => i % 2 ? " " : letter).join("") + "<br>";
    // }
}


function isOddArray(domElement, array) {

    array.forEach(str => {
        let newStr = str.split("").map((letter, i) => i % 2 ? letter : "&nbsp").join("") + "<br>";;

        domElement.innerHTML += newStr;
    });
    // for (let i = 0; i < array.length; i++) {
    //     return array[i].split("").map((letter, i) => i % 2 ? " " : letter).join("") + "<br>";
    // }
}




const textString = 
"We're no strangers to love_\
You know the rules and so do I_\
A full commitment's what I'm thinking of_\
You wouldn't get this from any other guy_\
I just wanna tell you how I'm feeling_\
Gotta make you understand";

let strPartOne = textString;
let strPartTwo = textString;


// textPartOne.innerHTML = isEven(strPartOne);
// textPartTwo.innerHTML = isOdd(strPartTwo);


// lineBreak(textPartOne)
// lineBreak(textPartTwo)

function isEven(str) {
    return str.split("").map((letter, i) => i % 2 ? " " : letter).join("");

    // return str.split("").map((letter, i => {
    //     return i % 2 ? " " : letter;
    // }))

    // return str.split("").map((letter, i => {
    //     if (i % 2) {
    //         return letter = " ";
    //     } else {
    //         return letter;
    //     }
    // }))

}

function isOdd(str) {
    return str.split("").map((letter, i) => i % 2 ? letter : " ").join("");
}



function lineBreak(DOM) {
    // let makeLineBreak = DOM.innerHTML.includes("_");

    // if (makeLineBreak) {
        DOM.innerHTML = DOM.innerHTML.replace(/$/m, "<br>");
    // }
}



// console.log(isEven(strPartOne));
// console.log(isOdd(strPartTwo));



