// List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     alert("I was double clicked");
// });

btn.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "The button clicked two times";
});

btn.addEventListener("contextmenu", () => {
    alert("Don't hack us by right click please!");
});

document.addEventListener("keydown", (e) => {
    console.log(e, "Key: ",e.key);
});