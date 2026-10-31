// Static noise background generator
const canvas = document.getElementById('noise-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function generateNoise() {
    const w = canvas.width;
    const h = canvas.height;
    const imgData = ctx.createImageData(w, h);
    const buffer = new Uint32Array(imgData.data.buffer);
    const len = buffer.length;

    for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
            buffer[i] = 0xffffffff; // White static grain
        }
    }
    ctx.putImageData(imgData, 0, 0);
    requestAnimationFrame(generateNoise);
}
generateNoise();

// Navigation Controls
const navMenu = document.querySelector('.menu-nav');
const nightSelectPanel = document.getElementById('night-select-panel');

document.getElementById('btn-newgame').addEventListener('click', () => {
    alert('Starting Night 1...');
    // Replace with: window.location.href = 'game.html?night=1';
});

document.getElementById('btn-nightselect').addEventListener('click', () => {
    navMenu.classList.add('hidden');
    nightSelectPanel.classList.remove('hidden');
});

document.getElementById('btn-back').addEventListener('click', () => {
    nightSelectPanel.classList.add('hidden');
    navMenu.classList.remove('hidden');
});

function startNight(nightNumber) {
    alert(`Launching Night ${nightNumber}...`);
    // Replace with: window.location.href = `game.html?night=${nightNumber}`;
}
