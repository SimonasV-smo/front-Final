import { gautiApatineRaide, gautiDidziaRaide, gautiSkaiciu, gautiSimboli } from './funkcijos.js';

export function sugeneruotiSlaptazodi(ilgis, itrauktiDidziasias, itrauktiSkaicius, itrauktiSimbolius) {
  let sugeneruotasSlaptazodis = '';
  const tipuKiekis = itrauktiDidziasias + itrauktiSkaicius + itrauktiSimbolius + 1; // +1 už mažąsias raides
  const tipuMasyvas = [
    { itrauktiApatines: true },
    { itrauktiDidziasias },
    { itrauktiSkaicius },
    { itrauktiSimbolius }
  ].filter(item => Object.values(item)[0]);

  if (tipuKiekis === 0) {
    return '';
  }

  for (let i = 0; i < ilgis; i += tipuKiekis) {
    tipuMasyvas.forEach(tipas => {
      const funkcijosPavadinimas = Object.keys(tipas)[0];
      sugeneruotasSlaptazodis += atsitiktineFunkcija[funkcijosPavadinimas]();
    });
  }

  const galutinisSlaptazodis = sugeneruotasSlaptazodis.slice(0, ilgis);
  return galutinisSlaptazodis;
}

const atsitiktineFunkcija = {
  itrauktiApatines: gautiApatineRaide,
  itrauktiDidziasias: gautiDidziaRaide,
  itrauktiSkaicius: gautiSkaiciu,
  itrauktiSimbolius: gautiSimboli
};
