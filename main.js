
document.addEventListener('DOMContentLoaded', function () {
    var music = document.getElementById("music");
    var play_music_button = document.getElementById("play-music-button");

    function playAudio() {
        if (music.paused) {
            music.play();
            play_music_button.className = 'pause';
        } else {
            music.pause();
            play_music_button.className = 'play';
        }
        music.addEventListener('ended',function() {
            play_music_button.className = 'play';
        });
    }
    play_music_button.addEventListener("click", playAudio);
});

