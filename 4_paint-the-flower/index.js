const colorPicker = document.querySelectorAll(".colors");
const tilesToColor = document.querySelectorAll(".tile-to-color");

let currentColor;
let svgIDs = [];

changeColor();

colorTile();





document.querySelector(".container").childNodes;


document.querySelectorAll(".tile-to-color").forEach(item => {
    // console.log(item.id)

    if (item.id !== undefined) {
        
        svgIDs.push(item.id)
        console.log(item.id)
    };
});


console.dir(document.querySelector(".container"))

function colorTile() {
    tilesToColor.forEach(tile => {
        tile.addEventListener("click", function(e) {
            let currentID = e.target.id;

            if (currentID !== undefined || currentID) {
                tile.style.fill = currentColor
            }

        });
    });
}


function changeColor() {
    colorPicker.forEach(color => {
        color.addEventListener("click", function(e) {
            let compStyles = window.getComputedStyle(color);
            currentColor = compStyles.getPropertyValue("background-color");
    
            console.log(currentColor)
        });
    });
};
