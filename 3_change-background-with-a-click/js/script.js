const button = document.querySelector(".button");

button.addEventListener("click", function() {

    const randomHslColor = Math.floor(Math.random() * (100 - 0) + 0)

    const bodyColor = "hsl(" + randomHslColor + ", " + "80%, 40%)"
    const btnColor = "hsl(" + randomHslColor + ", " + "80%, 30%)"

    document.body.style.backgroundColor = bodyColor;
    button.style.backgroundColor = btnColor;
    
});