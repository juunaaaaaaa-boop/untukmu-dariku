const pages = document.querySelectorAll(".page");

function showPage(id) {
  pages.forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

function openLetter() {
  showPage("letter");
}

function nextPage(id) {
  showPage(id);
}

function answerYes() {
  createHearts();
  showPage("yes");
}

function answerNo() {
  showPage("no");
}

function restart() {
  showPage("opening");
}

function createHearts() {

  for (let i = 0; i < 18; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.color = "rgba(255,255,255,0.5)";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "100";

    document.body.appendChild(heart);

    const duration = 3000 + Math.random() * 2500;

    heart.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 0
        },
        {
          transform: `translateY(-40vh) rotate(${Math.random() * 80 - 40}deg)`,
          opacity: 0.7
        },
        {
          transform: `translateY(-100vh) rotate(${Math.random() * 160 - 80}deg)`,
          opacity: 0
        }
      ],
      {
        duration: duration,
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      heart.remove();
    }, duration);
  }
           }
