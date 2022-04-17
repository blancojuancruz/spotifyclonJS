document.addEventListener("DOMContentLoaded", () => {
  allMyMusic();
  links();
});
// CARGAR AL INICIO

// VARIABLES DECLARAS
let songIndex = 0;
let audioSong = new Audio();
const progressBar = document.getElementById("progressBar");
const playPause = document.getElementById("playPause");
const songName = document.getElementById("songName");
const masterVolume = document.getElementById("masterVolume");
const nextSong = document.getElementById("nextArrow");
const prevSong = document.getElementById("prevArrow");
const cardContainer = document.querySelector(".generos");
const menuLinks = document.querySelector(".menu");
const timeDuration = document.getElementById("timerDuration");
const timeStart = document.getElementById("timerStart");
const volumen = document.getElementsByClassName("barra_progresoVolume");
// VARIABLES DECLARADAS

// SCRIPTING DE LINKS ASIDE
const allMyLinks = [
  { name: "Inicio", href: "#", srcImg: "img/home.svg" },
  { name: "Buscar", href: "#", srcImg: "img/search.svg" },
  { name: "Tu biblioteca", href: "#", srcImg: "img/library.svg" },
  { name: "Crear Lista", href: "#", srcImg: "img/add.svg" },
  { name: "Canciones que te gustan", href: "#", srcImg: "img/heart.svg" },
];

function links() {
  allMyLinks.forEach((link) => {
    const linksContainer = document.createElement("div");
    linksContainer.classList.add("linksContainer");

    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.name;

    const span = document.createElement("span");

    const aImg = document.createElement("img");
    aImg.src = link.srcImg;

    const divImg = document.createElement("div");
    divImg.classList.add("img-menuContainer");

    const divA = document.createElement("div");

    linksContainer.appendChild(divImg);
    linksContainer.appendChild(divA);

    divImg.appendChild(span);
    divImg.appendChild(aImg);
    span.appendChild(aImg);
    //

    divA.appendChild(a);

    menuLinks.appendChild(linksContainer);
  });
}
// SCRIPTING DE LINKS ASIDE

// ARRAY DE OBJETOS (CANCIONES)
const songs = [
  {
    name: "YSY A - DESFILAR MIS PENAS (PROD. ASAN)",
    filePath: "audio/1.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b2738f2162551691a5954d928290",
    id: "0",
    duration: "02:31",
  },
  {
    name: "Kidd Keo - Level Up ft. Enry K, Yay (Official Video)",
    filePath: "audio/2.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273c5714b3429d64d2679742348",
    id: "1",
    duration: "03:38",
  },
  {
    name: "Rauw Alejandro & Chencho Corleone - Desesperados",
    filePath: "audio/3.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b2733752b28d1b65cc1ce6da67a7",
    id: "2",
    duration: "03:51",
  },
  {
    name: "Feid, Alejo & Robi - Pantysito",
    filePath: "audio/4.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b27303a184c19d99418042ddf68a",
    id: "3",
    duration: "03:56",
  },
  {
    name: "DUKI - TOP 5 - Temporada de Reggaeton",
    filePath: "audio/5.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273142334e67b095d6aa56655b9",
    id: "4",
    duration: "03:04",
  },
  {
    name: "DUKI - Sudor y trabajo",
    filePath: "audio/6.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273305240b65c28020de3aac8eb",
    id: "5",
    duration: "03:16",
  },
  {
    name: "Midnight City - M83",
    filePath: "audio/7.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273b3591763154a27326b3f431a",
    id: "6",
    duration: "04:03",
  },
  {
    name: "Save Me - LISTENBEE, Naz Tokio",
    filePath: "audio/8.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b27325b3149f3280cbd97ea8dbb1",
    id: "7",
    duration: "03:29",
  },
  {
    name: "Tuesday (feat. Danelle Sandoval)",
    filePath: "audio/9.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b27312b939225600b564150c0a68",
    id: "8",
    duration: "02:35",
  },
  {
    name: "All I Need - Ehrling",
    filePath: "audio/10.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273e903f6908b068d0f0a74a92f",
    id: "9",
    duration: "03:10",
  },
  {
    name: "Para Siempre Diego - Los Ratones Paranoicos",
    filePath: "audio/11.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273b0289fb853c995d7bdad4e9d",
    id: "10",
    duration: "03:48",
  },
  {
    name: "Enemy (with JID) - from the series Arcane League of Legends",
    filePath: "audio/12.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273d9b35d1c4d15c9de88b754a7",
    id: "11",
    duration: "02:53",
  },
];
// ARRAY DE OBJETOS (CANCIONES)

// SCRIPTING CANCIONES INICIO
function allMyMusic() {
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
    cardTitle.textContent = song.name;

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
      audioSong.src = `audio/${songIndex + 1}.mp3`;
      songName.innerText = songs[songIndex].name;
      timeDuration.innerText = songs[songIndex].duration;
      audioSong.play();
      audioSong.currentTime = 0;
      playPause.classList.remove("bi-play-circle-fill");
      playPause.classList.add("bi-pause-circle-fill");
    });
  });
}
// SCRIPTING CANCIONES INICIO

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

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
};

// TIMER PARA LA BARRA DE PROGRESO
audioSong.addEventListener("timeupdate", () => {
  progress = parseInt((audioSong.currentTime / audioSong.duration) * 100);
  progressBar.value = progress;

  const addCero = (valor) => {
    if (valor < 10) {
      return "0" + valor;
    } else {
      return "" + valor;
    }
  };

  const minutos = (milisegundos) => {
    const minutos = parseInt(milisegundos / 1 / 60);
    milisegundos -= minutos * 60 * 1;

    const segundos = milisegundos / 1;

    return `${addCero(minutos)}:${addCero(segundos)}`;
  };

  timeStart.innerHTML = minutos(progress);
});

progressBar.addEventListener("change", () => {
  audioSong.currentTime = (progressBar.value * audioSong.duration) / 100;
});

audioSong.addEventListener("ended", () => {
  if (songIndex >= 11) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioSong.src = `audio/${songIndex + 1}.mp3`;
  songName.innerText = songs[songIndex].name;
  timeDuration.innerText = songs[songIndex].duration;
  audioSong.currentTime = 0;
  audioSong.play();
});
// TIMER PARA LA BARRA DE PROGRESO

// FLECHAS PREV/NEXT
nextSong.addEventListener("click", () => {
  if (songIndex >= 11) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioSong.src = `audio/${songIndex + 1}.mp3`;
  songName.innerText = songs[songIndex].name;
  timeDuration.innerText = songs[songIndex].duration;
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
  songName.innerText = songs[songIndex].name;
  timeDuration.innerText = songs[songIndex].duration;
  audioSong.currentTime = 0;
  audioSong.play();
  playPause.classList.remove("bi-play-circle-fill");
  playPause.classList.add("bi-pause-circle-fill");
});
// FLECHAS PREV/NEXT
