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

const countdownBox = document.getElementById("countdown-box");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// 🎂 Surprise unlock time
const unlockTime = new Date("2026-08-13T00:01:00+05:30").getTime();

function updateCountdown(){

    const now = new Date().getTime();
    const distance = unlockTime - now;

    if(distance <= 0){

        countdownBox.style.display = "none";

        return true;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    return false;
}

// Countdown automatically update hoga
setInterval(updateCountdown, 1000);
updateCountdown();


unlockBtn.addEventListener("click", function(){

    // 🔐 Password check
    if(passwordInput.value.trim() !== PASSWORD){

        error.innerHTML = "❌ Wrong Password";
        passwordInput.style.border = "2px solid red";

        if(navigator.vibrate){
            navigator.vibrate(200);
        }

        return;
    }

    // 🎂 Birthday time check
    const now = new Date().getTime();

    if(now < unlockTime){

        error.innerHTML =
        "⏳ Surprise abhi locked hai... Countdown khatam hone ka wait karo ❤️";

        passwordInput.style.border =
        "2px solid #ff4d8d";

        countdownBox.style.display = "block";

        updateCountdown();

        return;
    }

    // ✅ Password + time dono correct
    error.innerHTML = "";
    passwordInput.style.border = "none";
    countdownBox.style.display = "none";

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
    "Tumhari is muskaan ne meri duniya ko aur bhi khoobsurat bana diya. Tumhare saath har pal meri sabse pyari yaad hai. ❤️",

    "Suit me tumhari ye halki si muskaan aur chehre par aate hue baal... yahi andaaz mujhe baar-baar tumse pyaar karne ki wajah deta hai. 🌸",

    "Jab tum apne baalon ko peeche karti ho, us pal tum aur bhi khoobsurat lagti ho. Ye meri favourite memories me se ek hai. 💖",

    "Sardiyon me pink tum par aur bhi zyada khoobsurat lagta hai. Is photo ko dekhkar har baar dil bas tumhe hi dekhta reh jata hai. 💗"
];
let currentPhoto = 0;
let autoSlide;
function updatePhoto(){
galleryScreen.scrollTop = 0;
    galleryImage.classList.add("photo-animate");

    setTimeout(function(){
console.log(currentPhoto, photos[currentPhoto]);
        galleryImage.src = photos[currentPhoto];
        galleryImage.classList.remove("photo-animate");
        photoCounter.innerHTML = (currentPhoto + 1) + " / " + photos.length;
const caption = document.getElementById("gallery-caption");

caption.innerHTML = captions[currentPhoto];
caption.style.opacity = "1";
        const dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
    dot.classList.remove("active");
});

dots[currentPhoto].classList.add("active");
    },250);

}

function startAutoSlide(){

    clearInterval(autoSlide);

    autoSlide = setInterval(function(){

        if(currentPhoto < photos.length - 1){
            currentPhoto++;
            updatePhoto();
        }

    },6000);

}
nextLetter.addEventListener("click", function(){

    letterScreen.style.display = "none";
    galleryScreen.style.display = "flex";
galleryScreen.scrollTop = 0;
    updatePhoto();
startAutoSlide();
});

nextPhoto.addEventListener("click", function(){

    if(currentPhoto === photos.length - 1){

        galleryScreen.style.display = "none";
        loveScreen.style.display = "flex";

        reasonIndex = 0;
        reasonTitle.innerHTML = "Reason #1";
        reasonText.innerHTML = reasons[0];

        return;
    }

    currentPhoto++;
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
    
/* ==========================
   CHAPTER 5 - LOVE REASONS
========================== */

const loveScreen = document.getElementById("love-screen");
const reasonTitle = document.getElementById("reasonTitle");
const reasonText = document.getElementById("reasonText");
const nextReason = document.getElementById("nextReason");

const reasons = [
    "❤️ Tumhari smile meri duniya ki sabse khoobsurat cheez hai.",
    "🌸 Tumhari masoomiyat har din mujhe aur zyada tumse pyaar karne par majboor karti hai.",
    "💖 Tumhare saath har chhota pal bhi meri sabse badi khushi ban jata hai.",
    "💍 Main har janam me sirf tumhe hi apni zindagi ka hissa banana chahta hoon."
];

let reasonIndex = 0;

nextReason.addEventListener("click", function(){

    reasonIndex++;

    if(reasonIndex < reasons.length){

        reasonTitle.innerHTML = "Reason #" + (reasonIndex + 1);
        reasonText.innerHTML = reasons[reasonIndex];

    }else{

        loveScreen.style.display = "none";
        timelineScreen.style.display = "flex";
        updateTimeline();

    }

});
/* ==========================
   OUR LOVE JOURNEY
========================== */

const timelineScreen = document.getElementById("timeline-screen");
const cakeScreen = document.getElementById("cake-screen");
const timelineTitle = document.getElementById("timelineTitle");
const timelineText = document.getElementById("timelineText");
const nextTimeline = document.getElementById("nextTimeline");
const flame1 = document.getElementById("flame1");
const flame2 = document.getElementById("flame2");
const flame3 = document.getElementById("flame3");
const blowStatus = document.getElementById("blow-status");
const timelineData = [

{
title:"💖 First Meeting",
text:"Jis din hum pehli baar mile, shayad us din hi meri life badal gayi."
},

{
title:"🌸 Becoming Close",
text:"Dheere dheere hum best friends bane aur phir ek dusre ki aadat ban gaye."
},

{
title:"❤️ Forever Together",
text:"Ab meri har khushi, har dua aur har future sirf tumhare saath hi hai."
}

];

let timelineIndex = 0;

function updateTimeline(){

    timelineTitle.innerHTML = timelineData[timelineIndex].title;
    timelineText.innerHTML = timelineData[timelineIndex].text;

}



nextTimeline.addEventListener("click", function(){

    timelineIndex++;

    if(timelineIndex >= timelineData.length){

        timelineScreen.style.display = "none";
        cakeScreen.style.display = "flex";
startBlowDetection();
        return;
    }

    updateTimeline();

});
/* ==========================
   MIC BLOW DETECTION
========================== */

async function startBlowDetection(){

    if(!navigator.mediaDevices){
        blowStatus.innerHTML = "❌ Mic not supported";
        return;
    }

    try{

        const stream = await navigator.mediaDevices.getUserMedia({
            audio:true
        });

        const audioContext = new AudioContext();

        const analyser = audioContext.createAnalyser();

        const microphone =
            audioContext.createMediaStreamSource(stream);

        microphone.connect(analyser);

        analyser.fftSize = 256;

        const data = new Uint8Array(analyser.frequencyBinCount);

        function detect(){

            analyser.getByteFrequencyData(data);

            let volume = 0;

            for(let i=0;i<data.length;i++){
                volume += data[i];
            }

            volume /= data.length;

            if(volume > 45){

                flame1.classList.add("off");
                flame2.classList.add("off");
                flame3.classList.add("off");

                blowStatus.innerHTML =
                "🎉 Wish Accepted ❤️";
setTimeout(function(){
    cakeScreen.style.display = "none";
    giftScreen.style.display = "flex";
},1500);
                stream.getTracks().forEach(track=>track.stop());

                return;
            }

            requestAnimationFrame(detect);

        }

        detect();

    }catch(err){

        blowStatus.innerHTML =
        "🎤 Please allow microphone.";

    }

}


/* ==========================
CHAPTER 7 - GIFT BOX
========================== */

const giftScreen=document.getElementById("gift-screen");
const giftBox=document.getElementById("giftBox");

giftBox.addEventListener("click",function(){

giftBox.classList.add("open");

setTimeout(function(){

giftScreen.style.display = "none";
meetScreen.style.display = "flex";

updateMeet();
bgMusic.pause();

const birthdaySong = new Audio("happybirthday.mp3");

birthdaySong.play();
/* NEXT CHAPTER
Gallery Open Hogi */

},1500);

});


/* ==========================
CHAPTER 8.3 - MEET MEMORIES
========================== */

const meetScreen = document.getElementById("meet-screen");
const meetImage = document.getElementById("meet-image");
const meetTitle = document.getElementById("meet-title");
const meetDate = document.getElementById("meet-date");
const meetCaption = document.getElementById("meet-caption");
const nextMeet = document.getElementById("nextMeet");

const meetData = [

{
image:"meet1.jpg",
title:"❤️ First Meet",
date:"14 December 2024 • Cafe",
caption:"❤️ The day my heart found its favorite person. Our very first meeting at the cafe... I was nervous, excited, and unknowingly falling in love with you."
},

{
image:"meet2.jpg",
title:"🌳 Second Meet",
date:"15 December 2024 • Park",
caption:"🌳 One more day, one more memory. Walking together in the park made me realize that every place becomes beautiful when you're with me."
},

{
image:"meet3.jpg",
title:"💖 Third Meet",
date:"07 November 2025 • Park",
caption:"💖 After a long time, meeting you again at Sastri Park felt like time had stopped just for us."
},

{
image:"meet4.jpg",
title:"🌸 Fourth Meet",
date:"12 November 2025 • Sastri Park",
caption:"🌸 Another unforgettable day... another beautiful smile... another memory I never want to lose."
},

{
image:"meet5.jpg",
title:"🥹 Fifth Meet",
date:"28 April 2026 • Sastri Park",
caption:"🥹 Every meeting made us stronger. Every goodbye only made me wait more eagerly for the next hello."
},

{
image:"meet6.jpg",
title:"❤️ Sixth Meet",
date:"07 May 2026 • First Time In Privacy",
caption:"❤️ A day that became one of the most special memories of my life. Thank you for trusting me and giving me moments I'll always treasure."
}

];

let meetIndex = 0;

function updateMeet(){

    meetImage.src = meetData[meetIndex].image;
    meetTitle.innerHTML = meetData[meetIndex].title;
    meetDate.innerHTML = meetData[meetIndex].date;
    meetCaption.innerHTML = meetData[meetIndex].caption;

}

nextMeet.addEventListener("click", function(){

    meetIndex++;

    if(meetIndex >= meetData.length){

    showThankYou();

    return;
}

    updateMeet();

});

/* ==========================
   CHAPTER 1 - THANK YOU
========================== */

const thankyouScreen = document.getElementById("thankyou-screen");
const thankyouText = document.getElementById("thankyou-text");
const thankyouBtn = document.getElementById("thankyouBtn");

const thankyouMessage = `Thank you so much for understanding me,
my problems, and every situation I went through.

Thank you for being there during the moments
when things were not easy for me.

I will always be grateful for
every understanding moment,
every conversation,
and every memory we shared. ❤️`;

function showThankYou(){

    meetScreen.style.display = "none";
    thankyouScreen.style.display = "flex";

    thankyouText.innerHTML = "";

    let i = 0;

    const typing = setInterval(function(){

        thankyouText.innerHTML += thankyouMessage.charAt(i);

        i++;

        if(i >= thankyouMessage.length){
            clearInterval(typing);
        }

    },35);

}

thankyouBtn.addEventListener("click", function(){

    thankyouScreen.style.display = "none";

    showBreakup();

});
    /* ==========================
   CHAPTER 2 - BREAK UP
========================== */

const breakupScreen = document.getElementById("breakup-screen");
const breakupText = document.getElementById("breakup-text");
const breakupBtn = document.getElementById("breakupBtn");

const breakupMessage = `Tannu,

Shayad hum dono ke liye ab alag raaste choose karna hi behtar hai.

Humne saath mein bahut saare beautiful moments share kiye,
aur un memories ki value meri life mein hamesha rahegi.

Lekin har relationship ka ek waqt aata hai
jab humein accept karna padta hai ki cheezein badal gayi hain.

Isliye main yahin humari journey ko end kar raha hoon.

Main tumhe blame nahi karta,
aur na hi tumse koi complaint hai.

Bas ab humein apni-apni life mein aage badhna hai.

Goodbye, Tannu. ❤️`;

function showBreakup(){

    breakupScreen.style.display = "flex";

    breakupText.innerHTML = "";

    let i = 0;

    const typing = setInterval(function(){

        breakupText.innerHTML += breakupMessage.charAt(i);

        i++;

        if(i >= breakupMessage.length){

            clearInterval(typing);

        }

    },35);

}

breakupBtn.addEventListener("click", function(){

    breakupScreen.style.display = "none";

    showBestWish();

});
/* ==========================
   CHAPTER 3 - ALL THE BEST
========================== */

const bestwishScreen = document.getElementById("bestwish-screen");
const bestwishText = document.getElementById("bestwish-text");
const bestwishBtn = document.getElementById("bestwishBtn");

const bestwishMessage = `I genuinely wish you the best for your new life.

May you find happiness,
peace, success and everything you deserve.

I hope your future is filled with
beautiful moments and good people.

Whatever happens from here,
I hope life treats you kindly.

Take care of yourself.

And always keep smiling. ❤️

All the best for your new life. 🌸`;

function showBestWish(){

    bestwishScreen.style.display = "flex";

    bestwishText.innerHTML = "";

    let i = 0;

    const typing = setInterval(function(){

        bestwishText.innerHTML += bestwishMessage.charAt(i);

        i++;

        if(i >= bestwishMessage.length){

            clearInterval(typing);

        }

    },35);

}
bestwishBtn.addEventListener("click", function(){

    showPain();

});

/* ==========================
   CHAPTER 4 - MY PAIN
========================== */

const painScreen = document.getElementById("pain-screen");
const painText = document.getElementById("pain-text");
const painBtn = document.getElementById("painBtn");

const painMessage = `Sach kahun toh...

Main tumse bahut zyada pyaar karta hoon.
Tumse baat kiye bina rehna mere liye bahut mushkil ho raha hai.

Main tumhe har waqt miss karta hoon.
Kabhi-kabhi aankhon mein aansu aa jaate hain
aur samajh nahi aata ki apne emotions ko kaise sambhalun.

Mera routine bhi bigad gaya hai.
Khana time par nahi kha pa raha,
apna dhyaan nahi rakh pa raha,
aur bas baar-baar tumhari yaadein dimaag mein chalti rehti hain.

Mujhe pata hai ki ab humein apni-apni zindagi mein aage badhna hai,
lekin dil ko ye baat samajhne mein waqt lag raha hai.

Tum mere liye bahut important thi,
aur jo kuch humne saath mein jiya,
woh meri life ki ek bahut special memory hamesha rahega.

Main tumhe rokna nahi chahta.
Bas itna chahta hoon ki tum ye samjho
ki tumse door hona mere liye bilkul easy nahi tha.

Shayad waqt ke saath sab theek ho jayega...
Lekin aaj bhi,
main tumhe bahut miss karta hoon. ❤️`;

function showPain(){

    bestwishScreen.style.display = "none";
    painScreen.style.display = "flex";

    painText.innerHTML = "";

    let i = 0;

    const typing = setInterval(function(){

        painText.innerHTML += painMessage.charAt(i);

        i++;

        if(i >= painMessage.length){
            clearInterval(typing);
        }

    },35);

}

bestwishBtn.addEventListener("click", function(){

    showPain();

});

const roseFinalScreen =
    document.getElementById("rose-final-screen");

painBtn.addEventListener("click", function(){

    painScreen.style.display = "none";

    roseFinalScreen.style.display = "flex";

    setTimeout(function(){

        roseFinalScreen.style.display = "none";

        songFinalScreen.style.display = "flex";

    }, 5500);

});

/* ==========================
   BASIC SCREEN PROTECTION
========================== */

// Disable right click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});

// Disable common keyboard shortcuts
document.addEventListener("keydown", function(e){

    if(
        e.key === "PrintScreen" ||
        (e.ctrlKey && e.key === "u") ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J")
    ){
        e.preventDefault();
    }

});

// Prevent long press on images
document.addEventListener("dragstart", function(e){

    if(e.target.tagName === "IMG"){
        e.preventDefault();
    }

});
/* =========================
   FINAL SONG PLAYER
========================= */

const songFinalScreen =
    document.getElementById("song-final-screen");

const finalSong =
    document.getElementById("finalSong");

const songPlayBtn =
    document.getElementById("songPlayBtn");

const songProgressBar =
    document.getElementById("song-progress-bar");

const songCurrent =
    document.getElementById("song-current");

const songDuration =
    document.getElementById("song-duration");

const songStatus =
    document.getElementById("song-status");


function formatTime(seconds){

    if(isNaN(seconds)){
        return "0:00";
    }

    let minutes = Math.floor(seconds / 60);

    let secs = Math.floor(seconds % 60);

    if(secs < 10){
        secs = "0" + secs;
    }

    return minutes + ":" + secs;
}


songPlayBtn.addEventListener("click", function(){

    if(finalSong.paused){

        finalSong.play();

        songPlayBtn.innerHTML = "⏸️";
        songStatus.innerHTML = "Playing for you... ❤️";

    }else{

        finalSong.pause();

        songPlayBtn.innerHTML = "▶️";
        songStatus.innerHTML = "Paused ❤️";

    }

});


finalSong.addEventListener("loadedmetadata", function(){

    songDuration.innerHTML =
        formatTime(finalSong.duration);

});


finalSong.addEventListener("timeupdate", function(){

    if(finalSong.duration){

        const percent =
            (finalSong.currentTime /
            finalSong.duration) * 100;

        songProgressBar.style.width =
            percent + "%";

        songCurrent.innerHTML =
            formatTime(finalSong.currentTime);

    }

});


finalSong.addEventListener("ended", function(){

    songPlayBtn.innerHTML = "🔁";

    songStatus.innerHTML =
        "Once again... just for you ❤️";

    songProgressBar.style.width = "100%";

});
