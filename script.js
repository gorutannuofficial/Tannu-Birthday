const correctPassword = "Tannu13Goru";

setTimeout(() => {

    const userPassword = prompt("🔐 Enter Secret Password");

    if (userPassword === correctPassword) { document.body.innerHTML = `
<div style="
background:black;
color:white;
min-height:100vh;
padding:25px;
text-align:center;
font-family:Arial,sans-serif;
">

<h1 style="
font-size:48px;
color:#ff4d6d;
text-shadow:0 0 20px #ff4d6d;
margin-top:20px;
">
🎂 Happy Birthday Tannu 🎂
</h1>

<p style="font-size:24px;color:pink;">
❤️ Welcome My Love ❤️
</p>

<img src="photo1.jpg"
style="
width:90%;
max-width:350px;
border-radius:20px;
border:4px solid hotpink;
box-shadow:0 0 25px hotpink;
margin-top:20px;
">

<p style="font-size:20px;line-height:35px;margin-top:25px;">
Aaj ka din meri life ka sabse special din hai... ❤️<br><br>

Kyuki aaj meri duniya ka sabse khoobsurat insaan is duniya me aaya tha.<br><br>

Thank You meri life me aane ke liye... ❤️
</p>

<img src="photo2.jpg"
style="
width:90%;
max-width:350px;
border-radius:20px;
border:4px solid hotpink;
box-shadow:0 0 25px hotpink;
margin-top:35px;
">

<p style="font-size:20px;line-height:35px;margin-top:25px;">
Har musibat me bas tera haath chahiye... ❤️<br><br>

Har khushi tere saath manana chahta hu... ❤️
</p>

<img src="photo3.jpg"
style="
width:90%;
max-width:350px;
border-radius:20px;
border:4px solid hotpink;
box-shadow:0 0 25px hotpink;
margin-top:35px;
">

<h2 style="
font-size:38px;
color:#ff4d6d;
margin-top:40px;
text-shadow:0 0 20px #ff4d6d;
">
💖 Forever Together 💖
</h2>

<p style="font-size:22px;margin-top:15px;">
I Love You Forever ❤️
</p>

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
