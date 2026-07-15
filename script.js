const PASSWORD = "Tannu13Goru";

const passwordScreen = document.getElementById("password-screen");
const loadingScreen = document.getElementById("loading-screen");
const welcomeScreen = document.getElementById("welcome-screen");

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

loadingScreen.style.display = "none";
welcomeScreen.style.display = "none";

unlockBtn.onclick = function () {

    if (passwordInput.value.trim() !== PASSWORD) {

        error.innerHTML = "❌ Wrong Password";
        passwordInput.style.border = "2px solid red";

        if (navigator.vibrate) {
            navigator.vibrate(200);
        }

        return;
    }

    error.innerHTML = "";
    passwordScreen.style.display = "none";
    loadingScreen.style.display = "flex";

    let progress = 0;

    const timer = setInterval(function () {

        progress++;

        progressBar.style.width = progress + "%";
        progressText.innerHTML = progress + "%";
