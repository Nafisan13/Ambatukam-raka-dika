

// klk maka nambah number
let img = document.querySelector('#img-dik');
let btn = document.getElementById('tombol-kocok');
let output = document.getElementById('score');
let score = 0;
let audio = new Audio('ambatukam.mp3');
const imgDik = document.querySelector('.img-dik');
const imgRak = document.querySelector('#img-dik');
const tombolKocok = document.querySelector('#tombol-kocok');
const animasiMuka = document.getAnimations('@keyframes animasimuka');
// muncul mka
btn.addEventListener('mousedown', () => {
    score++;
    output.innerHTML = score;
});


var id = null;
function perPindahan() {
  var elem = document.getElementById("img-dik");
  var pos = -10;
  var audio = new Audio ('ambatukam.mp3');
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 99 ) {
      clearInterval(id);
    } else {
      audio.play();
      pos++; 
      elem.style.right = pos + 'em';
    };
  };
};