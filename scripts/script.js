document.addEventListener("DOMContentLoaded", () => {
  allMyMusic();
  mainBanner();
});
// CARGAR AL INICIO

// VARIABLES INICIALIZADAS
let songIndex = 0;
let audioSong = new Audio();
const progressBar = document.getElementById("progressBar");
const playPause = document.getElementById("playPause");
const songName = document.getElementById("songName");
const masterVolume = document.getElementById("masterVolume");
const nextSong = document.getElementById("nextArrow");
const prevSong = document.getElementById("prevArrow");
const cardContainer = document.querySelector(".generos");
const timeDuration = document.getElementById("timerDuration");
const timeStart = document.getElementById("timerStart");
const volumen = document.getElementsByClassName("barra_progresoVolume");
const replay = document.getElementById("replay");
const loopSong = document.getElementById("loopSong");
// VARIABLES DECLARADAS

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
      songName.innerText = `Now Playing: ${songs[songIndex].name}`;
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

  const minutos = (segundosP) => {
    const segundos = Math.round(segundosP % 0x3c).toString();
    const minutos = (Math.floor(segundosP / 0x3c) % 0x3c).toString();

    return `${addCero(minutos)}:${addCero(segundos)}`;
  };

  timeStart.innerHTML = minutos(audioSong.currentTime);
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
  songName.innerText = `Now Playing: ${songs[songIndex].name}`;
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
  songName.innerText = `Now Playing: ${songs[songIndex].name}`;
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
  songName.innerText = `Now Playing: ${songs[songIndex].name}`;
  timeDuration.innerText = songs[songIndex].duration;
  audioSong.currentTime = 0;
  audioSong.play();
  playPause.classList.remove("bi-play-circle-fill");
  playPause.classList.add("bi-pause-circle-fill");
});
// FLECHAS PREV/NEXT

// REPLAY
replay.addEventListener("click", () => {
  audioSong.currentTime = 0;
});
// REPLAY

loopSong.addEventListener("click", () => {
  let switchIcon = loopSong.innerText;

  switch (switchIcon) {
    case "repeat":
      loopSong.innerHTML = "repeat_on";
      loopSong.setAttribute("title", "Replay Automatico Activado");
      break;

    case "repeat_on":
      loopSong.innerHTML = "shuffle_on";
      loopSong.setAttribute("title", "Aleatorio");
      break;

    case "shuffle_on":
      loopSong.innerHTML = "repeat";
      loopSong.setAttribute("title", "Activar replay Automatico");
      break;
  }
});

// audioSong.addEventListener("ended", () => {
//   let switchIcon = loopSong.innerText;

//   switch (switchIcon) {
//     case "repeat_on":
//       audioSong.currentTime = 0;
//       break;

//     case "shuffle_on":
//     // let randomIndex = Math.floor(Math.random() * songs.length + 1);
//     // do {
//     //   randomIndex = Math.floor(Math.random() * songs.length + 1);
//     // } while ((songIndex = randomIndex));
//     // songIndex = randomIndex;
//     // audioSong.src = `audio/${songIndex + 1}.mp3`;
//     // songName.innerText = `Now Playing: ${songs[songIndex].name}`;
//     // timeDuration.innerText = songs[songIndex].duration;
//     // audioSong.currentTime = 0;
//     // audioSong.play();
//     // break;
//   }
// });

////////////////////////////////

const fadeContent = document.querySelector(".contenedor_degradado");

const mainDiv = document.createElement("div");
mainDiv.classList.add("banner");

const noBannerDiv = document.createElement("div");
noBannerDiv.classList.add("contenedor_playlist");
noBannerDiv.setAttribute("id", "slider");

const sliderBtnRight = document.createElement("div");
sliderBtnRight.classList.add("sliderBtn", "sliderBtnRight");
sliderBtnRight.setAttribute("id", "btn_right");

const sliderBtnLeft = document.createElement("div");
sliderBtnLeft.classList.add("sliderBtn", "sliderBtnLeft");
sliderBtnLeft.setAttribute("id", "btn_left");

const sliderArrowR = document.createElement("i");
sliderArrowR.classList.add("bi-arrow-right-circle-fill");

const sliderArrowL = document.createElement("i");
sliderArrowL.classList.add("bi-arrow-left-circle-fill");

sliderBtnLeft.appendChild(sliderArrowL);
sliderBtnRight.appendChild(sliderArrowR);

mainDiv.appendChild(sliderBtnLeft);
mainDiv.appendChild(sliderBtnRight);

fadeContent.appendChild(mainDiv);
fadeContent.appendChild(noBannerDiv);

const bannerIndex = [
  {
    name: "defaultPlaylist",
    src: "https://i.scdn.co/image/ab67706f00000002732148ed92f27fac784e3fd0",
    id: "1",
  },
  {
    name: "defaultPlaylist",
    src: "https://i.scdn.co/image/ab67706f00000002799d54629fcb5e2031ceb774",
    id: "2",
  },
  {
    name: "defaultPlaylist",
    src: "https://i.scdn.co/image/ab67706f000000020cf6ea047a23087c5a62a2ba",
    id: "3",
  },
  {
    name: "defaultPlaylist",
    src: "https://i.scdn.co/image/ab67706f000000020e2ff2b38d2e24ec4a58654f",
    id: "4",
  },
  {
    name: "defaultPlaylist",
    src: "https://i.scdn.co/image/ab67706f000000025373a723bc97f5f834648c2b",
    id: "5",
  },
];

function mainBanner() {
  bannerIndex.forEach((banner) => {
    const figuresContainer = document.createElement("div");
    figuresContainer.classList.add("cancion");
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = banner.src;

    mainDiv.appendChild(noBannerDiv);
    mainDiv.appendChild(figuresContainer);
    mainDiv.appendChild(figure);
    mainDiv.appendChild(image);

    noBannerDiv.appendChild(figuresContainer);
    noBannerDiv.appendChild(figure);
    noBannerDiv.appendChild(image);

    figuresContainer.appendChild(figure);
    figuresContainer.appendChild(image);

    figure.appendChild(image);
  });
}

const modalBtn = document.getElementById("modalButton");
const modal = document.querySelector(".modalBody");
const closeModal = document.getElementById("formIcon");
const modalShow = document.getElementById("modal");

modalBtn.addEventListener("click", () => {
  modal.classList.add("modalShow");
  modalShow.style.transform = "translateY(0%)";
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("modalShow");
  modalShow.style.transform = "translateY(-200%)";
});

window.addEventListener("click", (element) => {
  if (element.target == modal) {
    modal.classList.remove("modalShow");
    modalShow.style.transform = "translateY(-200%)";
  }
});
