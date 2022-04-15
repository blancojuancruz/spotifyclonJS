// VARIABLES DECLARAS
let songIndex = 0
const audioSong = new Audio('audio/3.mp3')
const progressBar = document.getElementById('progressBar')
const playPause = document.getElementById('playPause')
const nextSong = document.getElementById('nextArrow')
const prevSong = document.getElementById('prevArrow')
// VARIABLES DECLARADAS


// ARRAY DE OBJETOS (CANCIONES)
let songs = [
    {songName:'YSY A - DESFILAR MIS PENAS (PROD. ASAN)', filePath:'audio/1.mp3'},
    {songName:'Kidd Keo - Level Up ft. Enry K, Yay (Official Video)', filePath:'audio/2.mp3'},
    {songName:'Rauw Alejandro & Chencho Corleone - Desesperados', filePath:'audio/3.mp3'},
    {songName:'Feid, Alejo & Robi - Pantysito', filePath:'audio/4.mp3'},
    {songName:'DUKI - TOP 5', filePath:'audio/5.mp3'},
    {songName:'DUKI - Sudor y trabajo', filePath:'audio/6.mp3'}
]

// FUNCIONALIDAD DE BOTTON "PLAY/PLAUSE" 
playPause.addEventListener('click', () => {
    if(audioSong.paused || audioSong.currentTime <= 0 ){
        audioSong.play();
        playPause.classList.remove('bi-play-circle-fill')
        playPause.classList.add('bi-pause-circle-fill')
    }else {
        audioSong.pause()
        playPause.classList.remove('bi-pause-circle-fill')
        playPause.classList.add('bi-play-circle-fill')
    }
})
// FUNCIONALIDAD DE BOTTON "PLAY/PLAUSE"

// TIMER PARA LA BARRA DE PROGRESO
audioSong.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioSong.currentTime/audioSong.duration)*100)
    progressBar.value = progress
})

progressBar.addEventListener('change', () => {audioSong.currentTime = progressBar.value * audioSong.duration/100})
// TIMER PARA LA BARRA DE PROGRESO


//
const oneatTime = () => {
    Array.from(document.getElementsByClassName('playSong')).forEach((element)=>{
        element.classList.remove('bi-pause-circle')
        element.classList.add('bi-play-circle')
    })
}

Array.from(document.getElementsByClassName('playSong')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        oneatTime()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('bi-play-circle')
        e.target.classList.add('bi-pause-circle')
        audioSong.src = `audio/${songIndex}.mp3` 
        audioSong.currentTime = 0
        audioSong.play()
        playPause.classList.remove('bi-play-circle-fill')
        playPause.classList.add('bi-pause-circle-fill')
    })
})
//

// FLECHAS PREV/NEXT
nextSong.addEventListener('click', ()=>{
    if(songIndex >= 6){
        songIndex = 0
    } else {
        songIndex += 1
    }

    audioSong.src = `audio/${songIndex}.mp3` 
    audioSong.currentTime = 0
    audioSong.play()
    playPause.classList.remove('bi-play-circle-fill')
    playPause.classList.add('bi-pause-circle-fill')
})

prevSong.addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0
    } else {
        songIndex -= 1
    }

    audioSong.src = `audio/${songIndex}.mp3` 
    audioSong.currentTime = 0
    audioSong.play()
    playPause.classList.remove('bi-play-circle-fill')
    playPause.classList.add('bi-pause-circle-fill')
})
// FLECHAS PREV/NEXT