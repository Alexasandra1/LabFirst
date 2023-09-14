var audio = document.querySelector(".audio");
var playButton = document.querySelector(".play_button"); 
var imgSrc = document.querySelector(".img_src"); 

// Функция для воспроизведения или остановки аудио
function toggleAudio() {
    if (audio.paused) {
        audio.play(); 
        imgSrc.src = "img/pause.png"; 
    } else {
        audio.pause(); 
        imgSrc.src = "img/play button.png"; 
    }
}


playButton.addEventListener("click", toggleAudio);