

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

window.onload = function () {
  
  let MyPrompt = prompt(
    'Voulez-vous activer le son du jeu ? Répondre par "oui" ou par "non"'
    );
    console.log(typeof MyPrompt);
    if (MyPrompt === "oui" || MyPrompt === "non") {
      alert("Lancement de la musique.")
      
      elseif(MyPrompt === "non")
      audioEl.play()

      
    refreshCSS()
  } else {
    alert('Réponse incorrecte.')
    location.reload();
  }
};

let soundBtn = document.getElementById('mute')
let audioEl = document.getElementById('start_music')

soundBtn.addEventListener("click", () => {
  console.log(audioEl.paused);
  if (audioEl.paused) {
    audioEl.play()
  } else {
    audioEl.pause()
    audioEl.currentTime = 0;
  }
});







