
let soundBtn = document.getElementById("mute");
let body = document.getElementById("body");
let faSound = document.getElementById("fa_sound");
let startBtn = document.getElementById("startBtn")

// Sound
let backgroundSound = document.getElementById("start_music");
let startSound = document.getElementById("startSound");
let clickSound = document.getElementById("clickSound");
let muteSound = document.getElementById("muteSound");


// After the page load
window.onload = function () {
  let ouiBtn = document.getElementById("ouiBtn");
  let nonBtn = document.getElementById("nonBtn");
  let modal = document.getElementById("modalContainer");
  let bothBtn = document.querySelector(".modal_button");
  
    // Modal settings
    ouiBtn.addEventListener("click", () => {
      clickSound.play();
      alert("Activation du son en jeu");
      modal.style.display = "none";
      backgroundSound.play();
      faSound.classList.replace("fa-volume-xmark", "fa-volume-high");
      soundBtn.style.backgroundColor = "#3c5aa6";
    }) 
    
    nonBtn.addEventListener("click", () => {
      alert("Le son en jeu est désormais désactivé");
      modal.style.display = "none";
      faSound.classList.replace("fa-volume-high", "fa-volume-xmark");
      soundBtn.style.backgroundColor = "#3c5aa6";
    })

    if(ouiBtn || nonBtn){

      let startBackground = document.getElementById("background");
      let memoryTitle = document.getElementById("memoryTitle");
      let logo_pokemon = document.getElementById("logo_pokemon")

      // adding animation CSS by Class
      addEventListener("click", () =>{
      startBackground.classList.add('kenburns')
      memoryTitle.classList.add('slide-in')
      soundBtn.classList.add('bounce')
      logo_pokemon.classList.add('rotate')
    })
  }

  };


  // Mute Btn ON/OFF

  soundBtn.addEventListener("click", () => {
    if (backgroundSound.paused) {
      clickSound.play()
      setTimeout(() =>{
      backgroundSound.play();
      }, 1500)

      faSound.classList.replace("fa-volume-xmark", "fa-volume-high");
      soundBtn.style.backgroundColor = "#3c5aa6";
    } else {
      backgroundSound.pause();
      muteSound.play();
      backgroundSound.currentTime = 0;
      faSound.classList.replace("fa-volume-high", "fa-volume-xmark");
      soundBtn.style.backgroundColor = "#b92b2b";
    }
  });

  // Start Button settings

  startBtn.addEventListener("click", () =>{
    startSound.play()
  })


