refreshCSS = () => {
  let links = document.getElementsByTagName("link");
  for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute("rel") == "stylesheet") {
      let href = links[i].getAttribute("href").split("?")[0];
      let newHref = href + "?version=" + new Date().getMilliseconds();
      links[i].setAttribute("href", newHref);
    }
  }
};

let soundBtn = document.getElementById("mute");
let audioEl = document.getElementById("start_music");
let body = document.getElementById("body");
let faSound = document.getElementById("fa_sound");

window.onload = function () {
  body.style.display = "flex";
  let MyPrompt = prompt(
    'Voulez-vous activer le son en jeu ? Répondre par "oui" ou par "non"'
  );

  if (MyPrompt === "oui") {
    console.log("test musique");
    alert("Lancement de la musique.");
    refreshCSS();
    audioEl.play();
    faSound.classList.replace("fa-volume-xmark", "fa-volume-high");
    soundBtn.style.backgroundColor = "#2f779c";
  }

  if (MyPrompt === "non") {
    alert("Lancement de la partie sans musique.");
    refreshCSS();
  }
};

//  Mute or UnMute sound with Btn

soundBtn.addEventListener("click", () => {
  // console.log(audioEl.paused);
  if (audioEl.paused) {
    audioEl.play();
    faSound.classList.replace("fa-volume-xmark", "fa-volume-high");
    soundBtn.style.backgroundColor = "#2f779c";
  } else {
    audioEl.pause();
    audioEl.currentTime = 0;
    faSound.classList.replace("fa-volume-high", "fa-volume-xmark");
    soundBtn.style.backgroundColor = "#b92b2b";

  }
});
