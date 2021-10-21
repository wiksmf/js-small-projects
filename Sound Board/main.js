'use strict';

const btns = document.querySelector('.btns');
const sounds = ['applause', 'gasp', 'boo', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopAudio();
    document.getElementById(sound).play();
  });

  btns.appendChild(btn);
});

function stopAudio() {
  sounds.forEach(sound => {
    const song = document.querySelector(`#${sound}`);

    song.pause();
    song.currentTime = 0;
  });
}
