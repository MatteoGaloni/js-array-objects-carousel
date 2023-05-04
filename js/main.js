let currentCard = 0;
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];
// ********************************************************
for (let i = 0; i < images.length; i++) {
  const card = images[i];
  const elContainer = document.getElementById("slider");
  let tagContent = `<div class="card">`;
  tagContent += `<img class="slide" src="./${card.image}" alt="${card.title}">`;
  tagContent += `<div id="info">`;
  tagContent += `<h2>"${card.title}"</h2>`;
  tagContent += `<p>"${card.text}"</p>`;
  tagContent += `</div>`;
  tagContent += `</div>`;
  elContainer.innerHTML += tagContent;
}
// *************************************************************************
const sliderCard = document.querySelectorAll("#slider > .card");
sliderCard[0].classList.add("dBlock");
// **********************************************************************
const btnNext = document.getElementById("btnNext");
btnNext.addEventListener("click", function () {
  play();
  // sliderCard[currentCard].classList.remove("dBlock");
  // currentCard++;
  // if (currentCard == images.length) {
  //   currentCard = 0;
  // }
  // sliderCard[currentCard].classList.add("dBlock");
});
// *****************************************************************************
const btnPrevious = document.getElementById("btnPrevious");
btnPrevious.addEventListener("click", function () {
  sliderCard[currentCard].classList.remove("dBlock");
  if (currentCard == 0) {
    currentCard = images.length;
  }
  currentCard--;
  sliderCard[currentCard].classList.add("dBlock");
});

setInterval(play, 3000);

function play() {
  sliderCard[currentCard].classList.remove("dBlock");
  currentCard++;
  if (currentCard == images.length) {
    currentCard = 0;
  }
  sliderCard[currentCard].classList.add("dBlock");
}
