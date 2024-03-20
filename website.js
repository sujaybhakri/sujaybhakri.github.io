sessionStorage.setItem("scores", scores);
/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
  document.getElementById("mySidepanel").style.height = "900px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
var audio = document.getElementById("audio");
audio.volume = 0.2;

// var vid = doc.getElementById("vid");
// vid.playbackrate = 0.5;
document.querySelector("vid").playbackRate = 0.5;
