const text = document.getElementById("text");
const buttons = document.querySelector(".buttons");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const final = document.getElementById("final");

const messages = [
  "Hey Ananya 💕",
  "Will you be my Valentine? 💖"
];

let index = 0;

function showMessages() {
  if (index < messages.length) {
    text.innerHTML = messages[index];
    index++;
    setTimeout(showMessages, 1800);
  } else {
    buttons.classList.remove("hidden");
    document.getElementById("noHint").classList.remove("hidden");
  }
}

showMessages();

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", () => {
  final.innerHTML = "YAYYYY 💕 I knew it 😘 Happy Valentine’s Day!";
  buttons.style.display = "none";

  const gif = document.getElementById("gif");
  gif.classList.remove("hidden");
});


