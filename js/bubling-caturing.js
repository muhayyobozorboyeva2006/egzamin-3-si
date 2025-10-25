
let profilBtn = document.getElementById('profilBtn');
let profilOyna = document.getElementById('profilOyna');
let yopishX = document.getElementById('yopishX');
let jonatishBtn = document.getElementById('jonatishBtn');
let ism = document.getElementById('ism');
let email = document.getElementById('email');
let xatoMatni = document.getElementById('xatoMatni');
let forminput = document.getElementById('forminput');


profilBtn.addEventListener('click', () => {
    profilOyna.style.display = 'flex';
});

yopishX.addEventListener('click', () => {
    profilOyna.style.display = 'none';
});
jonatishBtn.addEventListener('click', () => {
    // Inputlar to‘ldirilganini tekshirish
    if (ism.value.trim() === '' || email.value.trim() === '') {
        xatoMatni.textContent = 'Iltimos, barcha maydonlarni to‘ldiring!';
    } else {
        xatoMatni.textContent = '';
        profilOyna.style.display = 'none'; 
        ism.value = '';
        email.value = '';
        alert('Maʼlumotlar jo‘natildi! ');
    }
});

window.addEventListener('click', (e) => {
    if (e.target === profilOyna) {
        profilOyna.style.display = 'none';
    }
}); 
