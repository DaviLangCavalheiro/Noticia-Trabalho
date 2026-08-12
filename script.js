let curtidas = 0;

const botaoCurtir = document.getElementById('btnCurtir');
const contador = document.getElementById('contador');

botaoCurtir.addEventListener('click', () => {
    curtidas++;
    contador.textContent = curtidas;
});