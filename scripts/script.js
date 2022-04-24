document.addEventListener("DOMContentLoaded", () => {
  allMyMusic();
});
// CARGAR AL INICIO

// VARIABLES INICIALIZADAS
let songIndex = 0;
let audioSong = new Audio();
const loadMusic = () => {
  audioSong.src = `audio/${songIndex + 1}.mp3`;
  songName.innerText = `Now Playing: ${songs[songIndex].name}`;
  timeDuration.innerText = songs[songIndex].duration;
  audioSong.play();
  audioSong.currentTime = 0;
  playPause.classList.remove("bi-play-circle-fill");
  playPause.classList.add("bi-pause-circle-fill");
};
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
const likedSongsModal = document.getElementById("likedSongsList");
const likedMusicElement = document.getElementById("likedSongs");
const likedMusic = [];

// VARIABLES DECLARADAS

// ARRAY DE OBJETOS (CANCIONES)
const songs = [
  {
    name: "YSY A - DESFILAR MIS PENAS (PROD. ASAN)",
    filePath: "audio/1.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b2738f2162551691a5954d928290",
    id: 0,
    duration: "02:31",
  },
  {
    name: "Kidd Keo - Level Up ft. Enry K, Yay",
    filePath: "audio/2.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273c5714b3429d64d2679742348",
    id: 1,
    duration: "03:38",
  },
  {
    name: "Rauw Alejandro & Chencho Corleone - Desesperados",
    filePath: "audio/3.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b2733752b28d1b65cc1ce6da67a7",
    id: 2,
    duration: "03:51",
  },
  {
    name: "Feid, Alejo & Robi - Pantysito",
    filePath: "audio/4.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b27303a184c19d99418042ddf68a",
    id: 3,
    duration: "03:56",
  },
  {
    name: "DUKI - TOP 5 - Temporada de Reggaeton",
    filePath: "audio/5.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273142334e67b095d6aa56655b9",
    id: 4,
    duration: "03:04",
  },
  {
    name: "DUKI - Sudor y trabajo",
    filePath: "audio/6.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273305240b65c28020de3aac8eb",
    id: 5,
    duration: "03:16",
  },
  {
    name: "Midnight City - M83",
    filePath: "audio/7.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273b3591763154a27326b3f431a",
    id: 6,
    duration: "04:03",
  },
  {
    name: "Save Me - LISTENBEE, Naz Tokio",
    filePath: "audio/8.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b27325b3149f3280cbd97ea8dbb1",
    id: 7,
    duration: "03:29",
  },
  {
    name: "Tuesday (feat. Danelle Sandoval)",
    filePath: "audio/9.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b27312b939225600b564150c0a68",
    id: 8,
    duration: "02:35",
  },
  {
    name: "All I Need - Ehrling",
    filePath: "audio/10.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273e903f6908b068d0f0a74a92f",
    id: 9,
    duration: "03:10",
  },
  {
    name: "Para Siempre Diego - Los Ratones Paranoicos",
    filePath: "audio/11.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273b0289fb853c995d7bdad4e9d",
    id: 10,
    duration: "04:38",
  },
  {
    name: "Imagine Dragons - Enemy (with JID)",
    filePath: "audio/12.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273d9b35d1c4d15c9de88b754a7",
    id: 11,
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

    const divSeparate = document.createElement("div");
    divSeparate.classList.add("separate");

    const cardSpan = document.createElement("span");
    cardSpan.classList.add("playSpan");

    const cardIcon = document.createElement("i");
    cardIcon.id = song.id;
    cardIcon.classList.add("bi-play-circle");
    cardIcon.classList.add("playSong");

    const likeSpan = document.createElement("span");

    const likeSong = document.createElement("i");
    likeSong.classList.add("likeIcon");
    likeSong.classList.add("material-icons");
    likeSong.innerText = "favorite";
    likeSong.onclick = () => {
      if (likeSong.innerText == "favorite") {
        likeSong.innerHTML = "thumb_down";
        addFavorites(song.id);
        closeSideModal();
      } else {
        likeSong.innerHTML = "favorite";
        removeFavorites(song.id);
        closeSideModal();
      }
    };

    divCards.appendChild(divImg);
    divCards.appendChild(imgCard);
    divCards.appendChild(divcardTxt);
    divCards.appendChild(cardTitle);
    divCards.appendChild(cardSpan);
    divCards.appendChild(cardIcon);
    divCards.appendChild(likeSong);
    divCards.appendChild(divSeparate);
    divCards.appendChild(likeSpan);

    divImg.appendChild(imgCard);

    divcardTxt.appendChild(cardTitle);
    divcardTxt.appendChild(divSeparate);

    divSeparate.appendChild(cardSpan);
    divSeparate.appendChild(cardIcon);
    divSeparate.appendChild(likeSong);
    divSeparate.appendChild(likeSpan);

    cardSpan.appendChild(cardIcon);
    likeSpan.appendChild(likeSong);

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
      loadMusic();
    });
  });
}
// SCRIPTING CANCIONES INICIO
const closeSideModal = () => {
  const closeX = document.getElementById("closeList");
  closeX.addEventListener("click", () => {
    likedMusicElement.classList.remove("showFavoriteSongs");
  });
};

const addFavorites = (id) => {
  const likedSong = songs.find((song) => song.id === id);
  likedMusic.push(likedSong);
  showLikedMusic(likedMusic);
};

const removeFavorites = (id) => {
  const item = likedMusic.find((song) => song.id === id);
  const index = likedMusic.indexOf(item);
  likedMusic.splice(index, 1);
  showLikedMusic(likedMusic);
};

const closeList = document.createElement("span");
closeList.classList.add("material-icons", "closeList");
closeList.setAttribute("id", "closeList");
closeList.textContent = "close";

const titleCont = document.createElement("h3");
titleCont.textContent = "Tus favoritos";

likedMusicElement.appendChild(closeList);
likedMusicElement.appendChild(titleCont);

likedSongsModal.addEventListener("click", () => {
  likedMusicElement.classList.add("showFavoriteSongs");
  closeSideModal();
});

function showLikedMusic(likedMusic) {
  likedMusicElement.innerHTML = "";

  const closeList = document.createElement("span");
  closeList.classList.add("material-icons", "closeList");
  closeList.setAttribute("id", "closeList");
  closeList.textContent = "close";

  const titleCont = document.createElement("h3");
  titleCont.textContent = "Tus favoritos";

  likedMusicElement.appendChild(closeList);
  likedMusicElement.appendChild(titleCont);

  likedMusic.forEach((song) => {
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

    const divSeparate = document.createElement("div");
    divSeparate.classList.add("separate");

    // const deleteSong = document.createElement("span");
    // deleteSong.classList.add("material-icons", "deleteSong");
    // deleteSong.setAttribute("id", "deleteSong");
    // deleteSong.textContent = "delete";

    divCards.appendChild(divImg);
    divCards.appendChild(divcardTxt);
    divCards.appendChild(imgCard);
    divCards.appendChild(cardTitle);
    divCards.appendChild(divSeparate);
    // divCards.appendChild(deleteSong);

    divImg.appendChild(imgCard);

    divcardTxt.appendChild(cardTitle);

    // divSeparate.appendChild(deleteSong);

    likedMusicElement.appendChild(divCards);

    closeSideModal();
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

progressBar.addEventListener("change", (e) => {
  e.preventDefault();
  audioSong.currentTime = (progressBar.value * audioSong.duration) / 100;
});

// EVENTO PARA QUE SE REPITA AUTOMATICAMENTE LA CANCION
audioSong.addEventListener("ended", () => {
  let switchIcon = loopSong.innerText;

  switch (switchIcon) {
    case "repeat_one":
      songIndex -= 1;
      break;

    case "shuffle_on":
      let randomIndex = Math.floor(Math.random() * songs.length + 1);
      do {
        randomIndex = Math.floor(Math.random() * songs.length + 1);
      } while (songIndex === randomIndex);
      songIndex = randomIndex;
      break;
  }
});

loopSong.addEventListener("click", () => {
  let switchIcon = loopSong.innerText;

  switch (switchIcon) {
    case "repeat":
      loopSong.innerHTML = "repeat_one";
      loopSong.setAttribute("title", "Replay Automatico Activado");
      break;

    case "repeat_one":
      loopSong.innerHTML = "shuffle_on";
      loopSong.setAttribute("title", "Aleatorio");
      break;

    case "shuffle_on":
      loopSong.innerHTML = "repeat";
      loopSong.setAttribute("title", "Activar replay Automatico");
      break;
  }
});

audioSong.addEventListener("ended", () => {
  if (songIndex >= 11) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  loadMusic();
});

// TIMER PARA LA BARRA DE PROGRESO

// FLECHAS PREV/NEXT
nextSong.addEventListener("click", () => {
  if (songIndex >= 11) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  loadMusic();
});

prevSong.addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  loadMusic();
});
// FLECHAS PREV/NEXT

// REPLAY
replay.addEventListener("click", () => {
  audioSong.currentTime = 0;
});
// REPLAY

// MODAL WINDOW FOR LOG IN
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
// MODAL WINDOW FOR LOG IN
