document.addEventListener("DOMContentLoaded", function() {
  const audioPlayer = document.getElementById("audio-player");
  const audioSource = document.getElementById("audio-source");
  const trackList = document.querySelectorAll("#tracklist ul li");
  const downloadLinks = document.querySelectorAll("#tracklist ul li a.download-link");

  trackList.forEach(function(track) {
    track.addEventListener("click", function() {
        const newSource = this.getAttribute("data-src");
        audioSource.src = newSource;
        audioPlayer.load();
        audioPlayer.play();
        
        // Highlight the active track
        trackList.forEach(t => t.classList.remove("active"));
        this.classList.add("active");
    });
  });


  downloadLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
          event.stopPropagation(); // Prevent the track from being played
      });
  });
});


