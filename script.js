const PASSWORD = "Tannu13Goru";

const passwordScreen = document.getElementById("password-screen");
const loadingScreen = document.getElementById("loading-screen");
const welcomeScreen = document.getElementById("welcome-screen");

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

unlockBtn.addEventListener("click", () => {

    if (passwordInput.value.trim() !== PASSWORD) {
        error.textContent = "❌ Wrong Password";
        passwordInput.style.border = "2px solid red";
        return;
    }

    passwordScreen.style.display = "none";
    loadingScreen.style.display = "flex";

    let progress = 0;

    const timer = setInterval(() => {

        progress++;

        progressBar.style.width = progress + "%";
        progressText.textContent = progress + "%";

        if (progress >= 100) {

            clearInterval(timer);

            loadingScreen.style.display = "none";
            welcomeScreen.style.display = "flex";

        }

    }, 30);

});

document.getElementById("startBtn").addEventListener("click", () => {

    alert("🎉 Welcome Tannu ❤️");

});
        if (progress >= 100) {

            clearInterval(timer);

            setTimeout(() => {

                loadingScreen.style.display = "none";
                welcomeScreen.style.display = "flex";

            }, 500);

        }

    }, 30);

});

document.getElementById("startBtn").addEventListener("click", () => {

    alert("🎉 Chapter 3 Coming Next ❤️");

});                                Birthday Surprise is Ready...
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
