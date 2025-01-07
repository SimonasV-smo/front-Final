import { atmintiesZaidimas } from './domElementai.js';

const simboliai = ['🌙', '🍀', '🌟', '🔥', '🍎', '🎈'];
let korteles = [...simboliai, ...simboliai];
let pirmaKortele = null;
let antraKortele = null;
let uzrakintasLenta = false;

export function inicializuotiZaidima() {
  sumaisyti(korteles);
  sukurtiLenta();
}

function sumaisyti(array) {
  array.sort(() => Math.random() - 0.5);
}

function sukurtiLenta() {
  atmintiesZaidimas.innerHTML = '';
  korteles.forEach(simbolis => {
    const kortele = document.createElement('div');
    kortele.classList.add('kortele');
    kortele.dataset.simbolis = simbolis;
    kortele.addEventListener('click', apverstiKortele);
    atmintiesZaidimas.appendChild(kortele);
  });
}

function apverstiKortele() {
  if (uzrakintasLenta) return;
  if (this === pirmaKortele) return;

  this.classList.add('apsiverte');
  this.textContent = this.dataset.simbolis;

  if (!pirmaKortele) {
    pirmaKortele = this;
    return;
  }

  antraKortele = this;
  patikrintiAtitikmeni();
}

function patikrintiAtitikmeni() {
  const yraAtitikmuo = pirmaKortele.dataset.simbolis === antraKortele.dataset.simbolis;

  yraAtitikmuo ? uzrakintiKorteles() : uzverstiKorteles();
}

function uzrakintiKorteles() {
  pirmaKortele.removeEventListener('click', apverstiKortele);
  antraKortele.removeEventListener('click', apverstiKortele);
  atstatytiLenta();
}

function uzverstiKorteles() {
  uzrakintasLenta = true;

  setTimeout(() => {
    pirmaKortele.classList.remove('apsiverte');
    antraKortele.classList.remove('apsiverte');
    pirmaKortele.textContent = '';
    antraKortele.textContent = '';
    atstatytiLenta();
  }, 1000);
}

function atstatytiLenta() {
  [pirmaKortele, antraKortele, uzrakintasLenta] = [null, null, false];
}
