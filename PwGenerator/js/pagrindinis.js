import {
  ilgumasInput,
  didziosiosCheckbox,
  skaiciaiCheckbox,
  simboliaiCheckbox,
  generuotiButton,
  slaptazodisInput,
  kopijuotiButton
} from './domElementai.js';
import { sugeneruotiSlaptazodi } from './slaptazodzioGeneravimas.js';

generuotiButton.addEventListener('click', () => {
  const ilgis = +ilgumasInput.value;
  const itrauktiDidziasias = didziosiosCheckbox.checked;
  const itrauktiSkaicius = skaiciaiCheckbox.checked;
  const itrauktiSimbolius = simboliaiCheckbox.checked;

  const slaptazodis = sugeneruotiSlaptazodi(ilgis, itrauktiDidziasias, itrauktiSkaicius, itrauktiSimbolius);
  slaptazodisInput.value = slaptazodis;
});

kopijuotiButton.addEventListener('click', () => {
  slaptazodisInput.select();
  document.execCommand('copy');
  alert('Slaptažodis nukopijuotas į iškarpinę');
});
