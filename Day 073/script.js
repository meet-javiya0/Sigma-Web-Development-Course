function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let vNumber = "";
    if (views > 999 && views < 999999) {
        views = views / 1000;
        vNumber = views.toString() + "K";
    } else if (views > 999999 && views < 9999999999) {
        views = views / 1000000;
        vNumber = views.toString() + "M";
    } else if (views > 9999999999 && views < 9999999999999) {
        views = views / 1000000000;
        vNumber = views.toString() + "B";
    }

    let newHtml = `
            <div class="image">
                <img src="${thumbnail}"
                    alt="thumbnail">
                <div class="time">${duration}</div>
            </div>
            <div class="info">
                <h2 class="title">${title}
                </h2>
                <p class="otherInfo">${cName} . ${vNumber} views . ${monthsOld} months ago</p>
            </div>`;

    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = newHtml;
    document.querySelector(".container").appendChild(div);
}

// createCard(
//     "Introduction to the Backend | Sigma Web Development Video #2",
//     "CodeWithHarry",
//     560000,
//     7,
//     "31:22",
//     "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
// );