import { rodytiEkrana } from './rodomiElementai.js';
import { prideti, atimti, dauginti, dalinti } from './matematikosOperatoriai.js';

let pirmaReiksme = '';
let antraReiksme = '';
let operatorius = '';
let rezultatas = '';

export function tvarkytiSkaicius(skaicius) {
  if (operatorius === '') {
    pirmaReiksme += skaicius;
    rodytiEkrana(pirmaReiksme);
  } else {
    antraReiksme += skaicius;
    rodytiEkrana(antraReiksme);
  }
}

export function tvarkytiOperatorius(veiksmas) {
  if (veiksmas === 'isvalyti') {
    pirmaReiksme = '';
    antraReiksme = '';
    operatorius = '';
    rezultatas = '';
    rodytiEkrana('0');
  } else if (veiksmas === 'istrinti') {
    if (antraReiksme !== '') {
      antraReiksme = antraReiksme.slice(0, -1);
      rodytiEkrana(antraReiksme);
    } else if (operatorius !== '') {
      operatorius = '';
      rodytiEkrana(pirmaReiksme);
    } else {
      pirmaReiksme = pirmaReiksme.slice(0, -1);
      rodytiEkrana(pirmaReiksme || '0');
    }
  } else if (veiksmas === 'lygus') {
    if (pirmaReiksme !== '' && antraReiksme !== '' && operatorius !== '') {
      rezultatas = atliktiVeiksma(operatorius, parseFloat(pirmaReiksme), parseFloat(antraReiksme));
      rodytiEkrana(rezultatas);
      pirmaReiksme = rezultatas;
      antraReiksme = '';
      operatorius = '';
    }
  } else {
    operatorius = veiksmas;
  }
}

function atliktiVeiksma(veiksmas, a, b) {
  switch (veiksmas) {
    case 'prideti':
      return prideti(a, b);
    case 'atimti':
      return atimti(a, b);
    case 'dauginti':
      return dauginti(a, b);
    case 'dalinti':
      return dalinti(a, b);
    default:
      return 'Klaida';
  }
}
