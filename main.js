var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

function playMusic() {
    var audio = document.getElementById('backgroundMusic');
    audio.play().catch(function(error) {
        console.log("A reprodução automática foi bloqueada. Interação do usuário é necessária.");
    });
}

function pauseMusic() {
    var audio = document.getElementById('backgroundMusic');
    audio.pause();  // Pausa a música, mas não reinicia
}


