const correctPassword = "Tannu13Goru";

const passwordScreen = document.getElementById("password-screen");
const loadingScreen = document.getElementById("loading-screen");

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

unlockBtn.addEventListener("click", () => {

    if(passwordInput.value === correctPassword){

        error.innerHTML = "";

        passwordScreen.style.display = "none";
        loadingScreen.style.display = "flex";

        setTimeout(()=>{

            loadingScreen.innerHTML = `
                <div style="text-align:center;color:white;">
                    <h1 style="
                    color:#ff4d6d;
                    font-size:45px;
                    text-shadow:0 0 20px #ff4d6d;
                    ">
                    ❤️ Welcome Tannu ❤️
                    </h1>

                    <p style="
                    font-size:22px;
                    margin-top:20px;
                    ">
                    Birthday Surprise is Loading...
                    </p>
                </div>
            `;

        },3000);

    }

    else{

        error.innerHTML="❌ Wrong Password";

        passwordInput.style.border="2px solid red";

        navigator.vibrate?.(200);

    }

});
