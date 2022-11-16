let start_sound = document.getElementById('start_music')
let mute_btn = document.getElementById('mute')

window.onload=function(){
  // alert("Veuillez activer le son sur votre navigateur web")
  // window.location.reload()
    start_sound.play()

    
  }

function muteAudio(){

audio = document.getElementById('audioPlayer')

mute_btn.addEventListener('click', () =>{
  start_sound.muted = true
  })

  if(start_sound.muted = true){
    mute_btn.addEventListener('click', () =>{
      start_sound.muted = false
    })
  }

  else if(start_sound.muted = false){
    mute_btn.addEventListener('click', () =>{
      start_sound.muted = true
    })
  }


}




