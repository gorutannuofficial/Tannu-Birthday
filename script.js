const correctPassword = "Tannu13Goru"; // 

setTimeout(() => {
    const userPassword = prompt("🔐 Enter Secret Password");

    if (userPassword === correctPassword) {

        document.body.innerHTML = `
        <div style="text-align:center;padding:20px;background:#000;color:white;min-height:100vh;font-family:Arial;">

            <h1 style="color:#ff4d6d;">🎉 Happy Birthday Tannu ❤️ 🎂</h1>

            <h2>My Beautiful Wife ❤️</h2>

            <p>
            Aaj ka din sirf tumhare liye hai.<br><br>

            Thank you meri life me aane ke liye.<br>
            I Love You Forever ❤️
            </p>

            <br>

            <img src="photo1.jpg" style="width:90%;max-width:350px;border-radius:20px;"><br><br>

            <img src="photo2.jpg" style="width:90%;max-width:350px;border-radius:20px;"><br><br>

            <img src="photo3.jpg" style="width:90%;max-width:350px;border-radius:20px;"><br><br>

            <h2>❤️ Forever Together ❤️</h2>

        </div>
        `;

    } else {

        document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:black;color:white;font-family:Arial;">
        <h2>❌ Wrong Password</h2>
        </div>`;

    }

},1000);
