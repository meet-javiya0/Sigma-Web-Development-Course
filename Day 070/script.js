let boxes = document.querySelector(".container").children;

function applyColor() {
    // let randomColor = Math.random() * 0x1000000; // 0 < randomColor < 0x1000000 (randomColor is a float)
    // randomColor = Math.floor(randomColor); // 0 < randomColor <= 0xFFFFFF (randomColor is an integer)
    // randomColor = randomColor.toString(16); // hex representation randomColor
    // randomColor = ("000000" + randomColor).slice(-6); // leading zeros added
    // randomColor = "#" + randomColor; // # added
    // return randomColor;

    // return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

for (const box in boxes) {
    boxes[box].style.backgroundColor = applyColor();
    boxes[box].style.color = applyColor();
}