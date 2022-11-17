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
  // body.style.display = "flex";
  // let MyPrompt = prompt(
  //   'Voulez-vous activer le son en jeu ? Répondre par "oui" ou par "non"'
  // );

//   if (MyPrompt === "oui") {
//     console.log("test musique");
//     alert("Lancement de la musique.");
//     audioEl.play();
//     refreshCSS();
//     faSound.classList.replace("fa-volume-xmark", "fa-volume-high");
//     soundBtn.style.backgroundColor = "#2f779c";
//   }

//   if (MyPrompt === "non") {
//     alert("Lancement de la partie sans musique.");
//     refreshCSS();
//   }
// };

//  Mute or UnMute sound with Btn
let ouiBtn = document.getElementById('ouiBtn')
let nonBtn = document.getElementById('nonBtn')
let modal = document.getElementById('modalContainer')

ouiBtn.addEventListener("click", () =>{
  // alert("Activation du son en jeu");
  modal.style.display="none"
  refreshCSS();
  audioEl.play();
  faSound.classList.replace("fa-volume-xmark", "fa-volume-high");
  soundBtn.style.backgroundColor = "#2f779c";
})

nonBtn.addEventListener("click", () =>{
  alert("Le son en jeu est désormais désactivé");
  modal.style.display="none"
  refreshCSS();
  faSound.classList.replace("fa-volume-high", "fa-volume-xmark");
  soundBtn.style.backgroundColor = "#2f779c";
})



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

}
