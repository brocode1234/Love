const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");
const scrollContainer = document.getElementById("scrollContainer");
const scroll = document.querySelector(".scroll");
const msg = document.getElementById("message");
const music = document.getElementById("music");

const royalMessage = `
I was blind to your love, cruel with my words, and careless with your heart. Now I see you were the rarest soul I could ever find  
Sorry di thangameh❤️
`;

enterBtn.addEventListener("click", () => {
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    scrollContainer.style.display = "flex";
    music.play();
    setTimeout(() => scroll.style.transform = "scaleY(1)", 300);
    setTimeout(() => typeMessage(), 2500);
    spawnHearts();
  }, 1000);
});

function typeMessage() {
  let i = 0;
  const typing = setInterval(() => {
    msg.innerHTML = royalMessage.slice(0, i++);
    msg.classList.add("show");
    if (i > royalMessage.length) clearInterval(typing);
  }, 40);
}

function spawnHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💛";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 25 + 10 + "px";
    heart.style.animation = "heartFall 6s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 400);
}
