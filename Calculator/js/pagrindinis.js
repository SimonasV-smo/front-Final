import { mygtukai } from './rodomiElementai.js';
import { tvarkytiSkaicius, tvarkytiOperatorius } from './skaiciuotuvas.js';

mygtukai.forEach(mygtukas => {
  mygtukas.addEventListener('click', () => {
    const veiksmas = mygtukas.textContent;

    if (!isNaN(veiksmas) || veiksmas === '.') {
      tvarkytiSkaicius(veiksmas);
    } else {
      switch (veiksmas) {
        case '+':
          tvarkytiOperatorius('prideti');
          break;
        case '-':
          tvarkytiOperatorius('atimti');
          break;
        case '*':
          tvarkytiOperatorius('dauginti');
          break;
        case '/':
          tvarkytiOperatorius('dalinti');
          break;
        case 'C':
          tvarkytiOperatorius('isvalyti');
          break;
        case 'DEL':
          tvarkytiOperatorius('istrinti');
          break;
        case '=':
          tvarkytiOperatorius('lygus');
          break;
        default:
          break;
      }
    }
  });
});
