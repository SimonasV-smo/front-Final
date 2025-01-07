import { inicializuotiZaidima } from './zaidimoLogika.js';
import { atmintiesZaidimas } from './domElementai.js';

document.addEventListener('DOMContentLoaded', () => {
  inicializuotiZaidima();
});

document.getElementById('atnaujinti').addEventListener('click', () => {
  inicializuotiZaidima();
});
