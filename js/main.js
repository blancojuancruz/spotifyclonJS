document.addEventListener("DOMContentLoaded", () => {
  allMyMusic();
  loadEvents();
  showLikedMusic();
  loadLocalStorage();
});

// const songs = [
//   {
//     name: "YSY A - DESFILAR MIS PENAS (PROD. ASAN)",
//     filePath: "audio/1.mp3",
//     img: "https://i.scdn.co/image/ab67616d0000b2738f2162551691a5954d928290",
//     id: 0,
//     duration: "02:31",
//   },
//   {
//     name: "Kidd Keo - Level Up ft. Enry K, Yay",
//     filePath: "audio/2.mp3",
//     img: "https://i.scdn.co/image/ab67616d0000b273c5714b3429d64d2679742348",
//     id: 1,
//     duration: "03:38",
//   },
//   {
//     name: "Rauw Alejandro & Chencho Corleone - Desesperados",
//     filePath: "audio/3.mp3",
//     img: "https://i.scdn.co/image/ab67616d0000b2733752b28d1b65cc1ce6da67a7",
//     id: 2,
//     duration: "03:51",
//   },
//   {
//     name: "Feid, Alejo & Robi - Pantysito",
//     filePath: "audio/4.mp3",
//     img: "https://i.scdn.co/image/ab67616d0000b27303a184c19d99418042ddf68a",
//     id: 3,
//     duration: "03:56",
//   },
//   {
//     name: "DUKI - TOP 5 - Temporada de Reggaeton",
//     filePath: "audio/5.mp3",
//     img: "https://i.scdn.co/image/ab67616d0000b273142334e67b095d6aa56655b9",
//     id: 4,
//     duration: "03:04",
//   },
//   {
//     name: "DUKI - Sudor y trabajo",
//     filePath: "audio/6.mp3",
//     img: "https://i.scdn.co/image/ab67616d0000b273305240b65c28020de3aac8eb",
//     id: 5,
//     duration: "03:16",
//   },
//   {
//     name: "Midnight City - M83",
//     filePath: "audio/7.mp3",
//     img: "https://i.scdn.co/image/ab67616d0000b273b3591763154a27326b3f431a",
//     id: 6,
//     duration: "04:03",
//   },
//   {
//     name: "Save Me - LISTENBEE, Naz Tokio",
//     filePath: "audio/8.mp3",
//     img: "https://i.scdn.co/image/ab67616d0000b27325b3149f3280cbd97ea8dbb1",
//     id: 7,
//     duration: "03:29",
//   },
//   {
//     name: "Tuesday (feat. Danelle Sandoval)",
//     filePath: "audio/9.mp3",
//     img: "https://i.scdn.co/image/ab67616d0000b27312b939225600b564150c0a68",
//     id: 8,
//     duration: "02:35",
//   },
//   {
//     name: "All I Need - Ehrling",
//     filePath: "audio/10.mp3",
//     img: "https://i.scdn.co/image/ab67616d0000b273e903f6908b068d0f0a74a92f",
//     id: 9,
//     duration: "03:10",
//   },
//   {
//     name: "Para Siempre Diego - Los Ratones Paranoicos",
//     filePath: "audio/11.mp3",
//     img: "https://i.scdn.co/image/ab67616d0000b273b0289fb853c995d7bdad4e9d",
//     id: 10,
//     duration: "04:38",
//   },
//   {
//     name: "Imagine Dragons - Enemy (with JID)",
//     filePath: "audio/12.mp3",
//     img: "https://i.scdn.co/image/ab67616d0000b273d9b35d1c4d15c9de88b754a7",
//     id: 11,
//     duration: "02:53",
//   },
// ];

const loadMusic = async () => {
  const data = await fetch("/js/data.json");
  const songs = await data.json();

  audioSong.src = `audio/${songIndex + 1}.mp3`;
  songName.innerText = `Now Playing: ${songs[songIndex].name}`;
  timeDuration.innerText = songs[songIndex].duration;
  audioSong.play();
  audioSong.currentTime = 0;
  playPause.classList.remove("bi-play-circle-fill");
  playPause.classList.add("bi-pause-circle-fill");
};

const allMyMusic = async () => {
  const data = await fetch("/js/data.json");
  const songs = await data.json();

  songs.forEach((song) => {
    const { name, img, id } = song;

    const divCards = document.createElement("div");
    divCards.classList.add("cards");
    divCards.setAttribute("id", id);

    const divcardTxt = document.createElement("div");
    divcardTxt.classList.add("card_text");
    divcardTxt.setAttribute("id", "cardText");

    const divImg = document.createElement("div");
    divImg.classList.add("card_imagen");

    const imgCard = document.createElement("img");
    imgCard.src = img;

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("songName");
    cardTitle.textContent = name;

    const divSeparate = document.createElement("div");
    divSeparate.classList.add("separate");

    const cardSpan = document.createElement("span");
    cardSpan.classList.add("playSpan");

    const cardIcon = document.createElement("i");
    cardIcon.id = id;
    cardIcon.classList.add("bi-play-circle");
    cardIcon.classList.add("playSong");

    const likeSpan = document.createElement("span");

    const likeSong = document.createElement("i");
    likeSong.classList.add("likeIcon");
    likeSong.classList.add("material-icons");
    likeSong.innerText = "favorite";
    likeSong.id = id;
    likeSong.addEventListener("click", () => {
      let songID = id;
      let songName = name;
      likeSong.classList.add("like");
      addFavorites(songID);
      showLikedMusic();

      Toastify({
        text: `(${songName}) Añadida a Favoritos`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {},
      }).showToast();
    });

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

  const oneatTime = () => {
    Array.from(document.getElementsByClassName("playSong")).forEach(
      (element) => {
        element.classList.remove("bi-pause-circle");
        element.classList.add("bi-play-circle");
      }
    );
  };

  Array.from(document.getElementsByClassName("playSong")).forEach((element) => {
    element.addEventListener("click", (e) => {
      oneatTime();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("bi-play-circle");
      e.target.classList.add("bi-pause-circle");
      loadMusic();
    });
  });
};

const showLikedMusic = async () => {
  const data = await fetch("/js/data.json");
  const songs = await data.json();

  const likedMusicElement = document.getElementById("likedSongs");

  likedMusicElement.innerHTML = "";

  const title = document.createElement("h3");
  title.textContent = "Tus Favoritos";

  likedMusicElement.appendChild(title);

  likedMusic.forEach((song) => {
    const { name, img, id } = song;

    const divCards = document.createElement("div");
    divCards.classList.add("cards");
    divCards.setAttribute("id", id);

    const divcardTxt = document.createElement("div");
    divcardTxt.classList.add("card_text");
    divcardTxt.setAttribute("id", "cardText");

    const divSeparate = document.createElement("div");
    divSeparate.classList.add("likeRemove");

    const removeSpan = document.createElement("span");

    const removeIcon = document.createElement("i");
    removeIcon.classList.add("material-icons");
    removeIcon.innerText = "thumb_down";
    removeIcon.addEventListener("click", () => {
      let songID = id;
      let songName = name;
      removeLocalStorage(songID);
      removeFavorites(songID);

      Toastify({
        text: `(${songName}) Removida de favoritos`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #e81471, #e51717)",
        },
        onClick: function () {},
      }).showToast();
    });

    const divImg = document.createElement("div");
    divImg.classList.add("card_imagen");

    const imgCard = document.createElement("img");
    imgCard.src = img;

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("songName");
    cardTitle.textContent = name;

    divCards.appendChild(divImg);
    divCards.appendChild(divcardTxt);
    divCards.appendChild(imgCard);
    divCards.appendChild(cardTitle);
    divCards.appendChild(divSeparate);

    divImg.appendChild(imgCard);

    divcardTxt.appendChild(cardTitle);
    divcardTxt.appendChild(divSeparate);

    divSeparate.appendChild(removeSpan);
    divSeparate.appendChild(removeIcon);

    removeSpan.appendChild(removeIcon);

    likedMusicElement.appendChild(divCards);
  });
};

const addFavorites = async (id) => {
  const data = await fetch("/js/data.json");
  const songs = await data.json();

  const likedSong = songs.find((song) => song.id === id);
  const songRepeat = likedMusic.find((item) => item.id === id);

  songRepeat ? noRepeatSong.push(likedSong) : likedMusic.push(likedSong);

  addSongToLocalStorage(likedSong);
};

const removeFavorites = async (id) => {
  const data = await fetch("/js/data.json");
  const songs = await data.json();

  let item = likedMusic.find((song) => song.id === id);
  let index = likedMusic.indexOf(item);
  likedMusic.splice(index, 1);
  showLikedMusic(likedMusic);
};

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
};

const addSongToLocalStorage = (song) => {
  const { id } = song;
  const songRepeat = likedSongsArray.find((item) => item.id === id);

  songRepeat ? noRepeatSong.push(song) : likedSongsArray.push(song);

  let likedSongsArrayJSON = JSON.stringify(likedSongsArray);
  localStorage.setItem("LikedMusic", likedSongsArrayJSON);
};

const removeLocalStorage = (songID) => {
  let likedSongIndex = likedSongsArray.find((song) => song.id === songID);

  likedSongsArray.splice(likedSongIndex, 1);

  let likedSongsArrayJSON = JSON.stringify(likedSongsArray);
  localStorage.setItem("LikedMusic", likedSongsArrayJSON);
};

const loadLocalStorage = async () => {
  const data = await fetch("/js/data.json");
  const songs = await data.json();

  const likedMusicElement = document.getElementById("likedSongs");

  likedSongsArray.forEach((song) => {
    const { name, img, id } = song;

    const divCards = document.createElement("div");
    divCards.classList.add("cards");

    const divcardTxt = document.createElement("div");
    divcardTxt.classList.add("card_text");
    divcardTxt.setAttribute("id", "cardText");

    const divSeparate = document.createElement("div");
    divSeparate.classList.add("likeRemove");

    const removeSpan = document.createElement("span");

    const removeIcon = document.createElement("i");
    removeIcon.classList.add("material-icons");
    removeIcon.innerText = "thumb_down";

    const divImg = document.createElement("div");
    divImg.classList.add("card_imagen");

    const imgCard = document.createElement("img");
    imgCard.src = img;

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("songName");
    cardTitle.textContent = name;

    divCards.appendChild(divImg);
    divCards.appendChild(divcardTxt);
    divCards.appendChild(imgCard);
    divCards.appendChild(cardTitle);
    divImg.appendChild(imgCard);
    divCards.appendChild(divSeparate);

    divcardTxt.appendChild(cardTitle);
    divcardTxt.appendChild(divSeparate);

    divSeparate.appendChild(removeSpan);
    divcardTxt.appendChild(removeIcon);

    removeSpan.appendChild(removeIcon);

    likedMusicElement.appendChild(divCards);
  });
};
