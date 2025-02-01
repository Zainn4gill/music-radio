document.addEventListener("DOMContentLoaded", function() {
    const playlist = [
        "music/song1.mp3",
        "music/song2.mp3"
    ];
    
    const playlistElement = document.getElementById("playlist");
    const audioPlayer = document.getElementById("audioPlayer");

    playlist.forEach((track, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `Track ${index + 1}`;
        listItem.classList.add("track-item");
        listItem.addEventListener("click", () => {
            audioPlayer.src = track;
            audioPlayer.play();
        });
        playlistElement.appendChild(listItem);
    });
});
