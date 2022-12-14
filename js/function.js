const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-off');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-off');
    icon.classList.add('fa-volume-up');
  }
  button.classList.add("fade");
});