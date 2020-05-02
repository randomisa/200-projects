const animationTimeCircle_1 = setInterval(createAnimation_rightToLeft(document.querySelector("#circle"), 0, 270), 15);
const animationTimeCircle_2 = setInterval(createAnimation_rightToLeft(document.querySelector("#circle2"), 0, 270), 8);
const animationTimeCircle_3 = setInterval(createAnimation_leftToRight(document.querySelector("#circle3"), 0, 270), 15);
const animationTimeCircle_4 = setInterval(createAnimation_leftToRight(document.querySelector("#circle4"), 0, 270), 8);


function createAnimation_rightToLeft(circle, startPosition, endPosition) {
    function frame() {    
        if (startPosition === 270) {
            if (circle.style.top !== (0 + "px") && circle.style.right !== (0 + "px")) {
    
                endPosition-=2;
    
                circle.style.top = endPosition + "px";
                circle.style.right = endPosition + "px";
    
                if (circle.style.top === (0 + "px") && circle.style.right === (0 + "px")) {
                    startPosition = 0;
                    endPosition = 270;
                };
            };
    
        } else {
            startPosition+=2;
            circle.style.top = startPosition + "px";
            circle.style.right = startPosition + "px";  
        };
    };

    return frame;
}

function createAnimation_leftToRight(circle, startPosition, endPosition) {
    function frame() {
        console.log("Hello, this circle is just beautiful :)");
        if (startPosition === 270) {
            if (circle.style.top !== (0 + "px") && circle.style.left !== (0 + "px")) {
    
                endPosition-=2;
    
                circle.style.top = endPosition + "px";
                circle.style.left = endPosition + "px";
    
                if (circle.style.top === (0 + "px") && circle.style.left === (0 + "px")) {
                    startPosition = 0;
                    endPosition = 270;
                };
            };
    
        } else {
            startPosition+=2;
            circle.style.top = startPosition + "px";
            circle.style.left = startPosition + "px";  
        };
    };

    return frame;
}


// function frame_1() {
//     console.log("Hello, this circle is just beautiful :)");

//     if (startPosition === 270) {
//         if (circle.style.top !== (0 + "px") && circle.style.right !== (0 + "px")) {

//             endPosition-=2;

//             circle.style.top = endPosition + "px";
//             circle.style.right = endPosition + "px";

//             if (circle.style.top === (0 + "px") && circle.style.right === (0 + "px")) {
//                 startPosition = 0;
//                 endPosition = 270;
//             };
//         };

//     } else {
//         startPosition+=2;
//         circle.style.top = startPosition + "px";
//         circle.style.right = startPosition + "px";  
//     };
// };