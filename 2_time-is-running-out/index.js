// First text
const explCaseContainer = document.querySelector("#explanation-case");
const explCasePart1 = document.querySelector("#explanation-case .part-1");
const explCasePart2 = document.querySelector("#explanation-case .part-2");
const explCaseArray = [explCasePart1, explCasePart2];

// Doors
const doorsContainer = document.querySelector("#doors-container");
const doorsArray = document.querySelectorAll(".doors");

// Hourglasses
const hourglassContainer = document.querySelector("#hourglass-container");
const hg_question = document.querySelector("#hourglass-container .question");
const hg_minutes = document.querySelector("#hourglass-container .minutes-container");
const hg_svg = document.querySelector("#hourglass-container .svg-container");

const hourglassArray = [hg_question, hg_minutes, hg_svg];

// Explanation answers
const explAnswers = document.querySelector("#explanation-answers");
const explArray = [explAnswers];



showExplCase();


function showExplCase() {
    let explCaseOffset = 0;
    // let explCaseIsDone = false;

    blendIn(explCaseArray, 200, explCaseOffset, showHourglass);
};


function showHourglass() {
    let hourglassOffset = 0;
    // let hourglassIsDone = false;

    blendIn(hourglassArray, 500, hourglassOffset, finished);
};

function finished() {
    console.log('wir sind fertig')
}



// blendIn(doorsArray, 500, doorsOffset);

function blendIn(array, timeOut, offsetVariable, finishedCallback) {
    // let functionIsDone = false;

    array.forEach((arrayItem, index) => {
        setTimeout(() => {
            arrayItem.style.visibility = "visible";
            console.log(arrayItem);

            // if (index === array.length - 1) {
            if(array.slice(-1)[0] === arrayItem) {
                console.log("It's done");
                // functionIsDone = true;

                console.log(finishedCallback);
                if (finishedCallback !== undefined) {
                    finishedCallback();
                }
            }
        }, timeOut + offsetVariable);
        offsetVariable += timeOut;
    });    
};


// doors.forEach(door => {
//     setTimeout(() => {
//         door.style.visibility = "hidden";
//         console.log(door)
//     }, 500 + offset);
//     offset += 500;
// });