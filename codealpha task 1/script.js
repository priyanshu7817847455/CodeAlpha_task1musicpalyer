const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');


const tracks = [
    { title: "Song One", artist: "Artist One", src: "path/to/your/music1.mp3" },
    { title: "Song Two", artist: "Artist Two", src: "path/to/your/music2.mp3" }
];

let currentTrackIndex = 0;


function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
}


playBtn.addEventListener('click', () => {
    audio.play();
});


pauseBtn.addEventListener('click', () => {
    audio.pause();
});


nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
});

prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
});


loadTrack(currentTrackIndex);
