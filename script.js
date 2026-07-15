const correctPassword = "Tannu13Goru";

const passwordScreen = document.getElementById("password-screen");
const loadingScreen = document.getElementById("loading-screen");
const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

unlockBtn.addEventListener("click", () => {

    if (passwordInput.value === correctPassword) {

        error.innerHTML = "";
        passwordScreen.style.display = "none";
        loadingScreen.style.display = "flex";

        let progress = 0;

        const interval = setInterval(() => {
            progress++;

            progressBar.style.width = progress + "%";
            progressText.innerText = progress + "%";

            if (progress >= 100) {
                clearInterval(interval);

                setTimeout(() => {
                    loadingScreen.innerHTML = `
                        <div style="text-align:center;color:white;">
                            <h1 style="color:#ff4d6d;font-size:45px;text-shadow:0 0 20px #ff4d6d;">
                                ❤️ Welcome Tannu ❤️
                            </h1>
                            <p style="font-size:22px;margin-top:20px;">
                                Birthday Surprise is Ready...
                            </p>
                        </div>
                    `;
                }, 300);
            }

        }, 30);

    } else {

        error.innerHTML = "❌ Wrong Password";
        passwordInput.style.border = "2px solid red";
        navigator.vibrate?.(200);

    }

});    else{

        error.innerHTML="❌ Wrong Password";

        passwordInput.style.border="2px solid red";

        navigator.vibrate?.(200);

    }

});
const loadingScreen = document.getElementById("loading-screen");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

loadingScreen.style.display = "flex";

let progress = 0;

const interval = setInterval(() => {
    progress++;

    progressBar.style.width = progress + "%";
    progressText.innerText = progress + "%";

    if (progress >= 100) {
        clearInterval(interval);

        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 500);
    }

}, 30);
