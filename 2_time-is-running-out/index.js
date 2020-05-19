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

function DifferentDoorScenarios(youtubeVideo) {
    this.youtubeVideo = youtubeVideo;
}

const doorScenarios = {
    door1: new DifferentDoorScenarios(doorsArray[0]),
    door2: new DifferentDoorScenarios(doorsArray[1]),
    door3: new DifferentDoorScenarios(doorsArray[2])
};

const doorScenariosArray = Object.values(doorScenarios);
console.log(doorsArray);

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
    // let explCaseIsDone = false;

    blendIn(explCaseArray, 200, explCaseOffset, showHourglass);
};


function showHourglass() {
    let hourglassOffset = 0;
    // let hourglassIsDone = false;

    blendIn(hourglassArray, 500, hourglassOffset, firstPageFinished) // (explCaseContainer).then(showExplAnswers));
};

function firstPageFinished() {   
    setTimeout(() =>{
        explCaseContainer.style.display = "none";    
        showExplAnswers();
    }, 1000);
}

function showExplAnswers() {
    let explAnswersOffset = 0;

    doorsContainer.style.display = "flex";

    blendIn(explAnswersArray, 0, explAnswersOffset, showDoors);    
};

// function loadSecondPage() {
//     setTimeout(() => {
//         showDoors();        
//     }, 2000);
// };

function showDoors() {
    let doorsOffset = 0;

    blendIn(doorsArray, 1000, doorsOffset, activateDoorEventListeners);
};

function activateDoorEventListeners() {
    doorsArray.forEach(door => {
        door.addEventListener("click", function() {
            console.log("lol");
        });
    });
}


function blendIn(array, timeOut, offsetVariable, finishedCallback) {
    // let functionIsDone = false;

    array.forEach((arrayItem, index) => {
        setTimeout(() => {

            if (array == explCaseArray || array == hourglassArray || array == doorsArray) {
                arrayItem.style.visibility = "visible";
                console.log(arrayItem);
            } else {
                arrayItem.style.display = "flex";
            };
                

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