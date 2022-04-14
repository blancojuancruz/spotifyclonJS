// FUNCIONALIDADES

let audioSong = new Audio('audio/1.mp3')
let progressBar = document.getElementById('progressBar')
let playPause = document.getElementById('playPause')

let songs = [
    {songName:'Desfilar mis penas', filePath:'audio/1.mp3', coverPath: 'play.svg'},
    {songName:'Desfilar mis penas', filePath:'audio/1.mp3', coverPath: 'play.svg'},
    {songName:'Desfilar mis penas', filePath:'audio/1.mp3', coverPath: 'play.svg'},
    {songName:'Desfilar mis penas', filePath:'audio/1.mp3', coverPath: 'play.svg'},
    {songName:'Desfilar mis penas', filePath:'audio/1.mp3', coverPath: 'play.svg'},
    {songName:'Desfilar mis penas', filePath:'audio/1.mp3', coverPath: 'play.svg'},
]

playPause.addEventListener('click', () => {
    if(audioSong.paused || audioSong.currentTime <= 0 ){
        audioSong.play();
        playPause.classList.remove('bi-play-circle-fill')
        playPause.classList.add('bi-pause-circle-fill')
    }else {
        audioElement.pause()
        playPause.classList.remove('bi-pause-circle-fill')
        playPause.classList.add('bi-play-circle-fill')
    }
})

audioSong.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    // CONSOLE TIMER
    progress = parseInt((audioSong.currentTime/audioSong.duration)*100)

    console.log(progress)
    progressBar.value = progress
})
