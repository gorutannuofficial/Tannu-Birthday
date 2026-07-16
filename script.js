const PASSWORD = "Tannu13Goru";

const passwordScreen = document.getElementById("password-screen");
const loadingScreen = document.getElementById("loading-screen");
const welcomeScreen = document.getElementById("welcome-screen");

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const letterScreen = document.getElementById("letter-screen");
const letterText = document.getElementById("letter-text");
const nextLetter = document.getElementById("nextLetter");
const galleryScreen = document.getElementById("gallery-screen");
const galleryImage = document.getElementById("gallery-image");
loadingScreen.style.display = "none";
welcomeScreen.style.display = "none";

unlockBtn.addEventListener("click", function(){

    if(passwordInput.value.trim() !== PASSWORD){

        error.innerHTML = "❌ Wrong Password";
        passwordInput.style.border = "2px solid red";

        if(navigator.vibrate){
            navigator.vibrate(200);
        }

        return;
    }

    error.innerHTML = "";
    passwordInput.style.border = "none";

    passwordScreen.style.display = "none";
    loadingScreen.style.display = "flex";

    let progress = 0;

    const timer = setInterval(function(){

        progress++;

        progressBar.style.width = progress + "%";
        progressText.innerHTML = progress + "%";
        if(progress >= 100){

            clearInterval(timer);

            setTimeout(function(){

                loadingScreen.style.display = "none";
                welcomeScreen.style.display = "flex";

            },500);

        }

    },30);

});
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    welcomeScreen.style.display = "none";
    letterScreen.style.display = "flex";

    const message = `❤️ Dear Tannu ❤️

Happy Birthday Meri Jaan...

Tum meri life ki sabse beautiful gift ho.

Har din tumhare saath aur bhi special ban jata hai.

Main hamesha tumhare saath rahunga.

I Love You Forever ❤️`;

    let i = 0;
    letterText.innerHTML = "";

    const typing = setInterval(function () {

        letterText.innerHTML += message.charAt(i);

        i++;

        if (i >= message.length) {
            clearInterval(typing);
        }

    }, 40);

});
// ==========================
// PHOTO GALLERY
// ==========================

const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const photoCounter = document.getElementById("photoCounter");

const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg"
];
const captions = [
    "❤️ Caption 1",
    "❤️ Caption 2",
    "❤️ Caption 3",
    "❤️ Caption 4"
];
let currentPhoto = 0;

function updatePhoto(){

    galleryImage.classList.add("photo-animate");

    setTimeout(function(){
console.log(currentPhoto, photos[currentPhoto]);
        galleryImage.src = photos[currentPhoto];
        galleryImage.classList.remove("photo-animate");
        photoCounter.innerHTML = (currentPhoto + 1) + " / " + photos.length;
const caption = document.getElementById("gallery-caption");

caption.style.opacity = "0";

setTimeout(function () {

    caption.innerHTML = captions[currentPhoto];
    caption.style.opacity = "1";

}, 200);
        const dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
    dot.classList.remove("active");
});

dots[currentPhoto].classList.add("active");
    },250);

}

nextLetter.addEventListener("click", function(){

    letterScreen.style.display = "none";
    galleryScreen.style.display = "flex";

    updatePhoto();

});

nextPhoto.addEventListener("click", function(){

    currentPhoto++;

    if(currentPhoto >= photos.length){
        currentPhoto = 0;
    }

    updatePhoto();

});

prevPhoto.addEventListener("click", function(){

    currentPhoto--;

    if(currentPhoto < 0){
        currentPhoto = photos.length - 1;
    }

    updatePhoto();

});
/* ==========================
   SWIPE GALLERY
========================== */

let startX = 0;

galleryImage.addEventListener("touchstart", function(e){

    startX = e.touches[0].clientX;

});

galleryImage.addEventListener("touchend", function(e){

    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 60){

        nextPhoto.click();

    }

    if(endX - startX > 60){

        prevPhoto.click();

    }

});
/* ==========================
   BACKGROUND MUSIC
========================== */

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

bgMusic.volume = 0.35;

musicBtn.addEventListener("click", function () {

    if (bgMusic.paused) {

        bgMusic.play().then(function () {
            musicBtn.innerHTML = "🔊";
        }).catch(function (err) {
            console.log(err);
        });

    } else {

        bgMusic.pause();
        musicBtn.innerHTML = "🎵";

    }

});
/* ==========================
   FULLSCREEN PHOTO
========================== */

const fullscreenView = document.getElementById("fullscreen-view");
const fullscreenImage = document.getElementById("fullscreen-image");
const closeFullscreen = document.getElementById("closeFullscreen");

galleryImage.addEventListener("click", function(){

    fullscreenView.style.display = "flex";
    updateFullscreen();

});
});
closeFullscreen.addEventListener("click", function(){

    fullscreenView.style.display = "none";

});

fullscreenView.addEventListener("click", function(e){

    if(e.target === fullscreenView){

        fullscreenView.style.display = "none";

    }

});
/* ==========================
   FLOATING HEARTS
========================== */

const heartsContainer = document.getElementById("hearts-container");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },8000);

}

setInterval(createHeart,700);
/* ==========================
   FULLSCREEN SWIPE
========================== */

const fullscreenCounter = document.getElementById("fullscreen-counter");

function updateFullscreen(){

    fullscreenImage.src = photos[currentPhoto];
    fullscreenCounter.innerHTML = (currentPhoto + 1) + " / " + photos.length;

}

let fullStartX = 0;

fullscreenImage.addEventListener("touchstart", function(e){

    fullStartX = e.touches[0].clientX;

});

fullscreenImage.addEventListener("touchend", function(e){

    let fullEndX = e.changedTouches[0].clientX;

    if(fullStartX - fullEndX > 60){

        currentPhoto++;

        if(currentPhoto >= photos.length){
            currentPhoto = 0;
        }

        updatePhoto();
        updateFullscreen();

    }

    if(fullEndX - fullStartX > 60){

        currentPhoto--;

        if(currentPhoto < 0){
            currentPhoto = photos.length - 1;
        }

        updatePhoto();
        updateFullscreen();

    }

});
/* ==========================
   DOUBLE TAP LIKE
========================== */

const likeHeart = document.getElementById("like-heart");

let lastTap = 0;

galleryImage.addEventListener("touchend", function(e){

    const now = Date.now();

    if(now - lastTap < 300){

        likeHeart.classList.add("show");

        if(navigator.vibrate){
            navigator.vibrate(50);
        }

        setTimeout(function(){
            likeHeart.classList.remove("show");
        },800);

    }

    lastTap = now;

});
    const now = new Date().getTime();

    if(now - lastTap < 300){

        likeHeart.classList.add("show");

        setTimeout(function(){
            likeHeart.classList.remove("show");
        },800);

    }

    lastTap = now;

});
