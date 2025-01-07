import { tvarkytiSkaicius, tvarkytiOperatorius } from './skaiciuotuvas.js';

document.addEventListener('DOMContentLoaded', () => {
    const mygtukai = document.querySelectorAll(".mygt");

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
                        console.warn(`Nežinomas veiksmas: ${veiksmas}`);
                        break;
                }
            }
        });
    });
});
