export default class Song {
    constructor (k_song, v_song, c_song) {
        this.audio = new Audio(v_song);
        this.element = document.querySelector(k_song);
        this.btn = document.querySelector(c_song);
        this.on = true;
    }
}

export function play_song(song) {
    song.element.onclick = () => {
        if (song.on) {
            song.btn.classList.add("open");
            song.audio.play();
            song.on = false;
        }
        else {
            song.btn.classList.remove("open");
            song.audio.pause();
            song.on = true;
        }
    }
}