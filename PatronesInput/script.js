const tarjeta = document.querySelector('#tarjeta');
const fecha = document.querySelector('#fecha');
const cv = document.querySelector('#cv');

//creo los patrones y limite de carateres
let patronTarjeta = '####-####-####-####';
let patronFecha = '##/##';
let patronCv = '###';

//teclas admitidas
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

//almacenar cada tecla
const inpuTarjeta = [];
const inpuFecha = [];
const inpuCv = [];


tarjeta.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (numbers.includes(e.key) && patronTarjeta.length >= inpuTarjeta.length + 1) {

        if (patronTarjeta[inpuTarjeta.length] === '-') {
            inpuTarjeta.push(patronTarjeta[inpuTarjeta.length]);
        }
        inpuTarjeta.push(e.key);
        tarjeta.value = inpuTarjeta.join('');
    }
});



fecha.addEventListener('keydown', (e) => {
    e.preventDefault();
    console.log(e.key);
    if (numbers.includes(e.key) && patronFecha.length >= inpuFecha.length + 1) {
        if (patronFecha[inpuFecha.length] === '/') {
            inpuFecha.push(patronFecha[inpuFecha.length])
        }
        inpuFecha.push(e.key);
        fecha.value = inpuFecha.join('');
    }

});

cv.addEventListener('keydown', (e) => {
    e.preventDefault();
    console.log(e.key);
    if (numbers.includes(e.key) && patronCv.length >= inpuCv.length + 1) {
        if (patronCv[inpuCv.length] === '/') {
            inpuCv.push(patronCv[inpuCv.length])
        }
        inpuCv.push(e.key);
        cv.value = inpuCv.join('');
    }

});


