const correctPassword = "Tannu13Goru"; // 👈 Isko badal do

setTimeout(() => {
    const userPassword = prompt("🔐 Enter Secret Password");

    if (userPassword === correctPassword) {
        document.getElementById("loading").innerHTML = `
            <h1>❤️ Welcome Tannu ❤️</h1>
            <p>Birthday Surprise is Loading...</p>
        `;
    } else {
        document.body.innerHTML = `
            <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:black;color:white;font-family:Arial;">
                <h2>❌ Wrong Password</h2>
            </div>
        `;
    }
}, 1000);
