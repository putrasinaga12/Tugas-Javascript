// Hamburger

const hamburger = document.querySelector ('#hamburger');
const navMenu = document.querySelector ('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

document.querySelectorAll('.group').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('hamburger-active')
    navMenu.classList.toggle('hidden')
}));

const form = document.getElementById('form');
const inputNama = document.getElementById('input-nama');
const inputEmail = document.getElementById('input-email');
const namaErr = document.getElementById('nama-err');
const emailErr = document.getElementById('email-err');

inputNama.addEventListener('input', (e) => {
    const pola1 = /^[a-zA-Z ?]{3,15}$/
    const hasilInputNama = pola1.test(e.target.value);

    if(hasilInputNama) {
        namaErr.style.display = 'none';
    } else {
        namaErr.style.display = 'block';
    }
});

inputEmail.addEventListener('input', (e) => {
    const pola2 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    const hasilInputEmail = pola2.test(e.target.value);
    
    if(hasilInputEmail) {
        emailErr.style.display = 'none';
    } else {
        emailErr.style.display = 'block';
    }
});

form.addEventListener('submit', (e) => {
    alert('sukses di submit')
});