

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

function toggleFaSound(e){
  e.classList.toggle('fa-volume')
}

let soundBtn = document.getElementById('mute')
let audioEl = document.getElementById('start_music')

window.onload=function(){
  let MyPrompt = prompt(
    'Voulez-vous activer le son en jeu ? Répondre par "oui" ou par "non"'
    )
    
    if (MyPrompt === "oui"){
      console.log("test musique");
      alert("Lancement de la musique.")
      refreshCSS()
      audioEl.play()
    }
    
    if (MyPrompt === "non"){
      alert("Lancement de la partie sans musique.")
      refreshCSS()
      changeFaOnMusic()
    }
    
      // else {
        // alert('Réponse incorrecte.')
        // location.reload();
      // }
    
}
      

//  Mute or UnMute sound with Btn




soundBtn.addEventListener("click", () => {
  // console.log(audioEl.paused);
  if (audioEl.paused) {
    audioEl.play()
  } else {
    audioEl.pause()
    audioEl.currentTime = 0;
  }
});







