let nSongs = parseInt(
  prompt("Ingrese la cantidad de canciones que quiere escuchar")
);

if (!nSongs) {
  alert("Porfavor ingrese un numero");

  nSongs = parseInt(
    prompt("Ingrese la cantidad de canciones que quiere escuchar")
  );
} else if (nSongs < 1) {
  alert("Porfavor ingrese un numero valido");

  nSongs = parseInt(
    prompt("Ingrese la cantidad de canciones que quiere escuchar")
  );
} else if (nSongs > 10) {
  alert("Ingrese un numero menor a 10");

  nSongs = parseInt(
    prompt("Ingrese la cantidad de canciones que quiere escuchar")
  );
}

const createList = [];
let maxSongs = nSongs;

do {
  const musicName = prompt("Ingrese nombre de la cancion que quiere añadir");
  createList.push(musicName);
  console.log(createList.length + musicName);
} while (createList.length != maxSongs);

const newList = createList.concat(["My new list"]);
alert(newList.join("\n"));

//

function containsObject(obj, list) {
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }

  return false;
}

class song {
  constructor(name, author, musicalGenre, price) {
    this.name = name;
    this.author = author;
    this.musicalGenre = musicalGenre;
    this.price = price;
  }
}

const single1 = new song(
  "Hayya Hayya (Better Together FIFA WC OFFICIAL SOUNDTRACK)",
  "Trinidad Cardona, Davido y Aysha",
  "Pop",
  50
);
const single2 = new song("Bizarrap - Nicky Jam", "Nicky Jam", "Reggaeton", 70);
const single3 = new song(
  "Desfilar mis penas (prod. ASAN",
  "YSY A",
  "Trap",
  100
);
const single4 = new song("Piel de cordero", "QUEVEDO, La pantera", "Rap", 150);
const single5 = new song("Volando bajito", "Duki", "Trap", 200);
const single6 = new song("La Zona", "Bad Bunny", "Reggaeton", 250);
const single7 = new song(
  "En la ciudad de la furia",
  "Soda Stereo",
  "Rock Nacional",
  300
);
const single8 = new song("Is this love", "Bob Marley", "Reggae", 350);
const single9 = new song("Cayo la noche", "QUEVEDO", "Reggaeton", 350);
const single10 = new song("FULL ICE", "YSY A", "Trap", 400);

const listOfSingle = [
  single1,
  single2,
  single3,
  single4,
  single5,
  single6,
  single7,
  single8,
  single9,
  single10,
];

let randomIndex;
let listElement;
let noRepeat = [];

for (let a = 0; a < audioSong; a++) {
  randomIndex = Math.floor(Math.random() * 10);
  listElement = listOfSingle[randomIndex];

  while (containsObject(listElement, noRepeat)) {
    randomIndex = Math.floor(Math.random() * 10);
    listElement = listOfSingle[randomIndex];
  }

  noRepeat.push(listElement);
}

noRepeat.forEach((element) => console.log(element.name));

function total(a) {
  let totalPrice = 0;
  a.map((element) => {
    totalPrice = totalPrice + element.price;
  });

  return totalPrice;
}

console.log(total(noRepeat));

//
