let songIndex;
let audioSong = new Audio();
let likedSongsArray = JSON.parse(localStorage.getItem("LikedMusic")) || [];
const progressBar = document.getElementById("progressBar");
const playPause = document.getElementById("playPause");
const songName = document.getElementById("songName");
const masterVolume = document.getElementById("masterVolume");
const volumeRange = document.querySelector("input");
const nextSong = document.getElementById("nextArrow");
const prevSong = document.getElementById("prevArrow");
const cardContainer = document.querySelector(".generos");
const timeDuration = document.getElementById("timerDuration");
const timeStart = document.getElementById("timerStart");
const volumen = document.getElementsByClassName("barra_progresoVolume");
const replay = document.getElementById("replay");
const loopSong = document.getElementById("loopSong");
const closeX = document.getElementById("closeList");
const modalBtn = document.getElementById("modalButton");
const modal = document.querySelector(".modalBody");
const closeModal = document.getElementById("formIcon");
const modalShow = document.getElementById("modal");
const formBtn = document.getElementById("formButton");
const closeSideModal = document.getElementById("closeSideModal");
const modalForm = document.getElementById("modalForm");
const user = document.getElementById("name");
const userName = document.getElementById("userInput");
const changeStatus = document.getElementById("nombre");
const likedMusic = [];
let noRepeatSong = [];
