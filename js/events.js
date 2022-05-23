function loadEvents() {
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

  audioSong.addEventListener("timeupdate", () => {
    progress = parseInt((audioSong.currentTime / audioSong.duration) * 100);
    progressBar.value = progress;

    const addCero = (value) => (value < 10 ? "0" + value : "" + value);

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

  audioSong.addEventListener("ended", async () => {
    const data = await fetch("/js/data.json");
    const songs = await data.json();

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

  volumeRange.addEventListener("input", () => {
    audioSong.volume = volumeRange.value / 100;

    volumeRange.value <= 0
      ? (masterVolume.innerText = "volume_off")
      : (masterVolume.innerText = "volume_up");
  });

  masterVolume.addEventListener("click", () => {
    let switchIcon = masterVolume.innerText;

    switch (switchIcon) {
      case "volume_up":
        masterVolume.innerHTML = "volume_off";
        audioSong.volume = 0;
        break;

      case "volume_off":
        masterVolume.innerHTML = "volume_up";
        audioSong.volume = 1;
        break;
    }
  });

  audioSong.addEventListener("ended", () => {
    songIndex >= 11 ? (songIndex = 0) : (songIndex += 1);
    loadMusic();
  });

  nextSong.addEventListener("click", () => {
    songIndex >= 11 ? (songIndex = 0) : (songIndex += 1);
    loadMusic();
  });

  prevSong.addEventListener("click", () => {
    songIndex <= 0 ? (songIndex = 0) : (songIndex -= 1);
    loadMusic();
  });

  replay.addEventListener("click", () => {
    audioSong.currentTime = 0;
  });

  modalBtn.addEventListener("click", () => {
    modal.classList.add("modalShow");
    modalShow.style.transform = "translateY(0%)";
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("modalShow");
    modalShow.style.transform = "translateY(-200%)";
  });

  formBtn.addEventListener("submit", () => {
    modal.classList.remove("modalShow");
    modalShow.style.transform = "translateY(-200%)";
  });

  window.addEventListener("click", (element) => {
    if (element.target == modal) {
      modal.classList.remove("modalShow");
      modalShow.style.transform = "translateY(-200%)";
    }
  });

  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    modal.classList.remove("modalShow");
    modalShow.style.transform = "translateY(-200%)";
    user.innerHTML = userName.value;
    changeStatus.innerText = "Cerrar Sesión";
    modalBtn.style.display = "none";
  });

  changeStatus.addEventListener("click", (e) => {
    e.preventDefault();

    user.innerHTML = "Usuario";
    changeStatus.innerText = "Registrarte";
    modalBtn.style.display = "";
  });
}
