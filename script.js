// PAGE ELEMENTS
let passwordPage = document.getElementById("passwordPage");
let welcomePage = document.getElementById("welcomePage");
let galleryPage = document.getElementById("galleryPage");
let emojiContainer = document.getElementById("emojiContainer");


// PASSWORD CHECK
function checkPassword() {
    let pass = document.getElementById("passwordInput").value;

    if (pass === "mustang_era") {
        passwordPage.classList.add("hidden");
        welcomePage.classList.remove("hidden");
        startEmojis();
    } 
    else {
        document.getElementById("errorMsg").innerHTML =
        "You don't have permission 😡😡 Go back!";
    }
}


// TOGGLE PASSWORD EYE
document.getElementById("toggleEye").onclick = function () {
    let input = document.getElementById("passwordInput");
    input.type = input.type === "password" ? "text" : "password";
};


// OPEN GALLERY PAGE
function openGallery() {
    welcomePage.classList.add("hidden");
    galleryPage.classList.remove("hidden");
    loadImages();
}


// GO HOME
function goHome() {
    galleryPage.classList.add("hidden");
    welcomePage.classList.remove("hidden");
}


// AUTO LOAD 25 IMAGES
function loadImages() {
    let box = document.getElementById("galleryContainer");
    box.innerHTML = "";

    for (let i = 1; i <= 25; i++) {
        let img = document.createElement("img");
        img.src = `assets/img${i}.jpg`;

        // natural image look — no stretching
        img.style.maxWidth = "350px";
        img.style.height = "auto";

        box.appendChild(img);
    }
}


// EMOJI FLOAT (Reduced Amount)
function startEmojis() {

    emojiContainer.classList.remove("hidden");

    const emojis = ["😊","❤","😍","😘","💕","🤞","💖","🥰","😚","✨","💛"];

    // Slow down emojis (less amount)
    setInterval(() => {

        let span = document.createElement("span");
        span.classList.add("emoji");
        span.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        span.style.left = Math.random() * 100 + "vw";
        span.style.fontSize = (15 + Math.random() * 12) + "px";

        emojiContainer.appendChild(span);

        setTimeout(() => span.remove(), 6000);

    }, 600); // slower → fewer emojis
}
