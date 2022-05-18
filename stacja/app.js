const ropa = document.getElementById('ropa');
const benzyna = document.getElementById('benzyna');
const ilosc = document.getElementById('ilosc');
const btn = document.querySelector('button');
const p = document.querySelector('.res');

const ropaVal = 7.5;
const benzynaVal = 6.7;

btn.addEventListener('click', () => {
    if (ropa.checked) {
        p.innerHTML = "cena to: " + (ropaVal * ilosc.value);
    } else if (benzyna.checked) {
        p.innerHTML = "cena to: " + (benzynaVal * ilosc.value);
    }
})



