// ARRAY PLAYLIST  ---------------------------- 
// create an audio element
let playlist = [
  {src:'audio/hidden jayeem - Without You.mp3', title:"Without You", artist:"jayeem"},  // 0
  {src:'audio/Skeler - My Fight.mp3', title:"My Fight", artist:"Skeler"},  // 1
  {src:'audio/Skeler - Tel Aviv.mp3', title:"Tell Aviv", artist:"Skeler"},  // 2
  {src:'audio/ALIVVVE - Fate.mp3', title:"Fate", artist:"ALIVVVE"},  // 3
  {src:'audio/Klimeks - Dreamscape.mp3', title:"Dreamscape93", artist:"Klimeks"},  // 4
  {src:'audio/ELHIXIR - Adrenaline.mp3', title: "Adrenaline", artist: "ELHIXIR"}, // 5
]

let whichSongAmIOn = 0
let currentPlay = false
let audio = null

// DISPLAY SONG ON SCREEN
let playSong = function(whichSong) {
	let song = playlist[whichSong] 
	if (audio) { 
		audio.src = song.src
    if (currentPlay) { audio.play() }
    } 
    else {
		audio = new Audio(song.src) 
    }

    songName = playlist[whichSongAmIOn].title;
    songArtist = playlist[whichSongAmIOn].artist;

    document.getElementById("songName").innerHTML = (`♫ ${songName} - ${songArtist} ♫`)
}

playSong(0)



// PLAY SONG & PAUSE SONG -------------------------------------------
let pressingPlay = function() {
	if (currentPlay) { 
		audio.pause()
		currentPlay = false //if its playing, pause it
		play.textContent = `▶`
    } 
    else {
		audio.play()
		currentPlay = true //if the music is not playing, play it
		play.textContent = `❚❚`
	}
}

let play = document.querySelector(`#play`)
play.addEventListener(`click`, pressingPlay)


// NEXT SONG -----------------------------------------
let pressedNext = function() {
	whichSongAmIOn = whichSongAmIOn + 1 //indication of where you are within song array
	playSong(whichSongAmIOn)
}

let next = document.querySelector(`#next`)
next.addEventListener(`click`, pressedNext)


// PREVIOUS SONG -----------------------------------------

let pressedPrev = function() {
    whichSongAmIOn = whichSongAmIOn - 1 //indication of where you are within song array
    playSong(whichSongAmIOn)
}
let prev = document.querySelector(`#prev`)
prev.addEventListener(`click`, pressedPrev)



// VOLUME DISPLAY ---------------------------------------------

let vol = document.querySelector(`#vol`)
vol.addEventListener(`change`, function(event) {
   audio.volume = vol.value
})
