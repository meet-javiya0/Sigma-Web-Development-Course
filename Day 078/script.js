// Array for the commands
let commands = [
    "Initializing Hacking...",
    "Reading your files...",
    "Password files detected...",
    "Sending all passwords and personal files to server...",
    "Cleaning up...",
];

// function for random delay
async function randomDelay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000 + 6000 * Math.random());
    });
}

// add command after random delay
async function addCommand(command) {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = command;
    document.body.appendChild(div);
}

async function main() {
    // Animation for three dots
    let interval = setInterval(() => {
        let lastCommand = document.body.getElementsByTagName("div");
        lastCommand = lastCommand[lastCommand.length - 1];
        console.log(lastCommand);
        if (lastCommand.innerHTML.endsWith("...")) {
            lastCommand.innerHTML = lastCommand.innerHTML.slice(
                0,
                lastCommand.innerHTML.length - 3
            );
        } else {
            lastCommand.innerHTML += ".";
        }
    }, 1000);

    // add commands
    for (const command of commands) {
        await addCommand(command);
    }

    // wait and clear interval
    await randomDelay();
    clearInterval(interval);
}
main();