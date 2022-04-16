document.addEventListener("DOMContentLoaded", () => {
  mostrarMusica();
});

// VARIABLES DECLARAS
let songIndex = 0;
let audioSong = new Audio();
const progressBar = document.getElementById("progressBar");
const playPause = document.getElementById("playPause");
const songName = document.getElementById("indexsongName");
const masterVolume = document.getElementById("masterVolume");
const nextSong = document.getElementById("nextArrow");
const prevSong = document.getElementById("prevArrow");
const cardContainer = document.querySelector(".generos");
// VARIABLES DECLARADAS

// ARRAY DE OBJETOS (CANCIONES)
const songs = [
  {
    songName: "YSY A - DESFILAR MIS PENAS (PROD. ASAN)",
    filePath: "audio/1.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b2738f2162551691a5954d928290",
    id: 1,
  },
  {
    songName: "Kidd Keo - Level Up ft. Enry K, Yay (Official Video)",
    filePath: "audio/2.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273c5714b3429d64d2679742348",
    id: 2,
  },
  {
    songName: "Rauw Alejandro & Chencho Corleone - Desesperados",
    filePath: "audio/3.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b2733752b28d1b65cc1ce6da67a7",
    id: 3,
  },
  {
    songName: "Feid, Alejo & Robi - Pantysito",
    filePath: "audio/4.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b27303a184c19d99418042ddf68a",
    id: 4,
  },
  {
    songName: "DUKI - TOP 5 - Temporada de Reggaeton",
    filePath: "audio/5.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273142334e67b095d6aa56655b9",
    id: 5,
  },
  {
    songName: "DUKI - Sudor y trabajo",
    filePath: "audio/6.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273305240b65c28020de3aac8eb",
    id: 6,
  },
  {
    songName: "Midnight City - M83",
    filePath: "audio/7.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273b3591763154a27326b3f431a",
    id: 7,
  },
  {
    songName: "Save Me - LISTENBEE, Naz Tokio",
    filePath: "audio/8.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b27325b3149f3280cbd97ea8dbb1",
    id: 8,
  },
  {
    songName: "Tuesday (feat. Danelle Sandoval)",
    filePath: "audio/9.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b27312b939225600b564150c0a68",
    id: 9,
  },
  {
    songName: "All I Need - Ehrling",
    filePath: "audio/10.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273e903f6908b068d0f0a74a92f",
    id: 10,
  },
];
// ARRAY DE OBJETOS (CANCIONES)

function mostrarMusica() {
  songs.forEach((song) => {
    const divCards = document.createElement("div");
    divCards.classList.add("cards");

    const divcardTxt = document.createElement("div");
    divcardTxt.classList.add("card_text");
    divcardTxt.setAttribute("id", "cardText");

    const divImg = document.createElement("div");
    divImg.classList.add("card_imagen");

    const imgCard = document.createElement("img");
    imgCard.src = song.img;

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("songName");
    cardTitle.textContent = song.songName;

    const cardSpan = document.createElement("span");

    const cardIcon = document.createElement("i");
    cardIcon.id = song.id;
    cardIcon.classList.add("bi-play-circle");
    cardIcon.classList.add("playSong");

    divCards.appendChild(divImg);
    divCards.appendChild(imgCard);
    divCards.appendChild(divcardTxt);
    divCards.appendChild(cardTitle);
    divCards.appendChild(cardSpan);
    divCards.appendChild(cardIcon);

    divImg.appendChild(imgCard);

    divcardTxt.appendChild(cardTitle);
    divcardTxt.appendChild(cardSpan);
    divcardTxt.appendChild(cardIcon);

    cardSpan.appendChild(cardIcon);

    cardContainer.appendChild(divCards);
  });

  // FUNCION PARA QUE SUENE UNA CANCION A LA VEZ
  const oneatTime = () => {
    Array.from(document.getElementsByClassName("playSong")).forEach(
      (element) => {
        element.classList.remove("bi-pause-circle");
        element.classList.add("bi-play-circle");
      }
    );
  };
  // FUNCION PARA QUE SUENE UNA CANCION A LA VEZ

  Array.from(document.getElementsByClassName("playSong")).forEach((element) => {
    element.addEventListener("click", (e) => {
      oneatTime();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("bi-play-circle");
      e.target.classList.add("bi-pause-circle");
      audioSong.src = `audio/${songIndex}.mp3`;
      songName.innerText = songs[songIndex - 1].songName;
      audioSong.play();
      audioSong.currentTime = 0;
      playPause.classList.remove("bi-play-circle-fill");
      playPause.classList.add("bi-pause-circle-fill");
    });
  });
}

// FUNCIONALIDAD DE BOTTON "PLAY/PLAUSE"
playPause.addEventListener("click", () => {
  if (audioSong.paused || audioSong.currentTime <= 0) {
    audioSong.play();
    playPause.classList.remove("bi-play-circle-fill");
    playPause.classList.add("bi-pause-circle-fill");
  } else {
    audioSong.pause();
    playPause.classList.remove("bi-pause-circle-fill");
    playPause.classList.add("bi-play-circle-fill");
  }
});
// FUNCIONALIDAD DE BOTTON "PLAY/PLAUSE"

// TIMER PARA LA BARRA DE PROGRESO
audioSong.addEventListener("timeupdate", () => {
  progress = parseInt((audioSong.currentTime / audioSong.duration) * 100);
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioSong.currentTime = (progressBar.value * audioSong.duration) / 100;
});
// TIMER PARA LA BARRA DE PROGRESO

// FLECHAS PREV/NEXT
nextSong.addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioSong.src = `audio/${songIndex + 1}.mp3`;
  songName.innerText = songs[songIndex].songName;
  audioSong.currentTime = 0;
  audioSong.play();
  playPause.classList.remove("bi-play-circle-fill");
  playPause.classList.add("bi-pause-circle-fill");
});

prevSong.addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioSong.src = `audio/${songIndex + 1}.mp3`;
  songName.innerText = songs[songIndex].songName;
  audioSong.currentTime = 0;
  audioSong.play();
  playPause.classList.remove("bi-play-circle-fill");
  playPause.classList.add("bi-pause-circle-fill");
});
// FLECHAS PREV/NEXT
