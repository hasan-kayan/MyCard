document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners to each button
  document.getElementById("btn1").addEventListener("click", function () {
    playMusic();
  });

  document.getElementById("btn2").addEventListener("click", function () {
    playMusic();
  });

  document.getElementById("btn3").addEventListener("click", function () {
    playMusic();
  });

  // Function to play the music
  function playMusic() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0; // Reset the music to the beginning
      audio.play();
    }
  }

  // Function to redirect to another HTML file
  function redirectTo(url) {
    window.location.href = url;
  }
});
