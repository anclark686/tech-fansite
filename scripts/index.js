function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const state = {
    techCount: 0,
};

const techContainer = document.querySelector("#tech-container");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const addbutton = document.getElementById("add-button")

const addTech = () => {
    const tech = ['💻', '⌨️', '🖥️', '🖨️', '🖱️', '⌚️', '📱']
    const newTech = document.createElement("span");
    
    newTech.textContent = tech[getRandomInt(7)];
    techContainer.appendChild(newTech);

    state.techCount += 1;
    const techCountContainer = document.querySelector("#techCount");
    techCountContainer.textContent = `Tech Count: ${state.techCount}`;
};

const lightMode = () => {
    body.className = "light-body";
    header.className = "light-head-foot";
    footer.className = "light-head-foot";
    addbutton.className = "btn-light"
    techContainer.className = "light-container";
}

const darkMode = () => {
    body.className = "dark-body";
    header.className = "dark-head-foot";
    footer.className = "dark-head-foot";
    addbutton.className = "btn-dark"
    techContainer.className = "dark-container";
}

const registerEventHandlers = () => {
    const techButton = document.querySelector("#add-button");
    techButton.addEventListener("click", addTech);

    const lightButton = document.getElementById("light");
    lightButton.addEventListener("click", lightMode);

    const darkButton = document.getElementById("dark");
    darkButton.addEventListener("click", darkMode);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);