const correctPassword = "Tannu13Goru";

setTimeout(() => {

    const userPassword = prompt("🔐 Enter Secret Password");

    if (userPassword === correctPassword) {

        document.body.innerHTML = `
        <div style="background:black;color:white;min-height:100vh;padding:20px;text-align:center;font-family:Arial;">

            <h1 style="color:#ff4d6d;font-size:45px;">
            ❤️ Happy Birthday Tannu ❤️
            </h1>

            <p style="font-size:22px;">
            Welcome My Love 💖
            </p>

            <br>

            <img src="photo1.jpg" style="width:90%;max-width:350px;border-radius:20px;"><br><br>

            <p style="font-size:18px;">
            Aaj ka din meri life ka sabse special din hai...
            Kyuki aaj meri duniya ka sabse khoobsurat insaan is duniya me aaya tha. ❤️
            </p>

            <br>

            <img src="photo2.jpg" style="width:90%;max-width:350px;border-radius:20px;"><br><br>

            <p style="font-size:18px;">
            Thank You meri life me aane ke liye...
            I Love You Forever ❤️
            </p>

            <br>

            <img src="photo3.jpg" style="width:90%;max-width:350px;border-radius:20px;"><br><br>

            <h2>💖 Forever Together 💖</h2>

        </div>
        `;

    } else {

        document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:black;color:white;font-size:30px;">
        ❌ Wrong Password
        </div>
        `;

    }

},1000);
