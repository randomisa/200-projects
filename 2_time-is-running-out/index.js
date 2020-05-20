// Container
const contentContainer = document.querySelector(".container");
const chosenDoorContainer = document.querySelector("#chosen-door-container");

// First text
const explCaseContainer = document.querySelector("#explanation-case");
const explCasePart1 = document.querySelector("#explanation-case .part-1");
const explCasePart2 = document.querySelector("#explanation-case .part-2");
const explCaseArray = [explCasePart1, explCasePart2];

// Doors
const doorsContainer = document.querySelector("#doors-container");

const doorsArray = [
    document.querySelector("#door-1"),
    document.querySelector("#door-2"),
    document.querySelector("#door-3")
];

// Hourglasses
const hourglassContainer = document.querySelector("#hourglass-container");
const hg_question = document.querySelector("#hourglass-container .question");
const hg_minutes = document.querySelector("#hourglass-container .minutes-container");
const hg_svg = document.querySelector("#hourglass-container .svg-container");

const hourglassArray = [hg_question, hg_minutes, hg_svg];

// Explanation answers
const explAnswers = document.querySelector("#explanation-answers");
const explAnswersArray = [explAnswers];



showExplCase();


function showExplCase() {
    let explCaseOffset = 0;

    blendIn(explCaseArray, 1000, explCaseOffset, showHourglass);
};


function showHourglass() {
    let hourglassOffset = 0;

    blendIn(hourglassArray, 2000, hourglassOffset, firstPageFinished) // (explCaseContainer).then(showExplAnswers));
};

function firstPageFinished() {   
    setTimeout(() =>{
        explCaseContainer.style.display = "none";    
        showExplAnswers();
    }, 3000);
}

function showExplAnswers() {
    let explAnswersOffset = 0;

    doorsContainer.style.display = "flex";

    blendIn(explAnswersArray, 0, explAnswersOffset, showDoors);    
};

function showDoors() {
    let doorsOffset = 0;

    blendIn(doorsArray, 2000, doorsOffset, activateDoorEventListeners);
};

function activateDoorEventListeners() {
    doorsArray.forEach(door => {
        door.addEventListener("click", function(e) {
            let test = door.id;

            contentContainer.style.display = "none";

            chosenDoorContainer.style.display = "block";

            document.querySelector("." + test).style.display = "flex";

        });
    });
}

function blendIn(array, timeOut, offsetVariable, finishedCallback) {

    array.forEach((arrayItem, index) => {
        setTimeout(() => {

            if (array == explCaseArray || array == hourglassArray || array == doorsArray) {
                arrayItem.style.visibility = "visible";
                console.log(arrayItem);
            } else {
                arrayItem.style.display = "flex";
            };

            if(array.slice(-1)[0] === arrayItem) {
                console.log("It's done");

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