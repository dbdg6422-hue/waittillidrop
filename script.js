let lastScroll = 0;
const correctPassword = "mustang_era";

// Pages
const passwordPage = document.getElementById("passwordPage");
const welcomePage = document.getElementById("welcomePage");
const galleryPage = document.getElementById("galleryPage");
const gallery = document.getElementById("gallery");

const passwordInput = document.getElementById("passwordInput");
const passwordMessage = document.getElementById("passwordMessage");

// Emoji containers
const emojiContainerWelcome = document.getElementById("emojiContainerWelcome");
const emojiContainerGallery = document.getElementById("emojiContainerGallery");

// Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
togglePassword.addEventListener("click", () => {
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

// PASSWORD PAGE LOGIC
document.getElementById("submitPassword").addEventListener("click", () => {
    if(passwordInput.value === correctPassword){
        passwordPage.style.display = "none";
        welcomePage.style.display = "block";
    } else {
        passwordMessage.innerHTML = "😡 You haven't permission! 😡";
    }
});

// OPEN MAGIC BUTTON
document.getElementById("openBtn").addEventListener("click", () => {
    lastScroll = window.scrollY;
    welcomePage.style.display = "none";
    galleryPage.style.display = "block";
    loadPhotos();
});

// Go Home Button
document.getElementById("goHomeBtn").addEventListener("click", () => {
    galleryPage.style.display = "none";
    welcomePage.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Go Back Button
document.getElementById("goBackBtn").addEventListener("click", () => {
    window.scrollTo({ top: lastScroll, behavior: "smooth" });
});

// Load images in gallery
function loadPhotos() {
    gallery.innerHTML = "";
    for(let i=1;i<=25;i++){
        const img = document.createElement("img");
        img.src = `assets/img${i}.jpg`;
        let size = Math.floor(Math.random()*150)+250;
        img.style.width = size+"px";
        img.style.height = "auto";
        gallery.appendChild(img);
    }
}

// EMOJIS floating continuously bottom → top
const emojis = ["😊","❤","😍","😘","💕","🤞","💖","🥰","😚","✨","🌸","💛"];

function createEmoji(container){
    const emoji = document.createElement("div");
    emoji.innerText = emojis[Math.floor(Math.random()*emojis.length)];
    emoji.style.position = "absolute";
    emoji.style.left = Math.random()*window.innerWidth+"px";
    emoji.style.bottom = "-40px";
    emoji.style.fontSize = Math.floor(Math.random()*20)+12+"px";

    container.appendChild(emoji);

    let rise = setInterval(()=>{
        let bottom = parseInt(emoji.style.bottom);
        emoji.style.bottom = bottom + 2 + "px";
        if(bottom>window.innerHeight+50){
            emoji.remove();
            clearInterval(rise);
        }
    },20);
}

// Emojis for welcome page
setInterval(()=>{
    if(welcomePage.style.display==="block"){
        createEmoji(emojiContainerWelcome);
    }
},300);

// Emojis for gallery page
setInterval(()=>{
    if(galleryPage.style.display==="block"){
        createEmoji(emojiContainerGallery);
    }
},300);
