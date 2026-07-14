const correctPassword = "Tannu13Goru";

setTimeout(() => {

    const userPassword = prompt("🔐 Enter Secret Password");

    if (userPassword === correctPassword) {

        

    } else {

        document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:black;color:white;font-size:30px;">
        ❌ Wrong Password
        </div>
        `;

    }

},1000);
