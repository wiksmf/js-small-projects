'use strict';

const keyboardInput = document.querySelector('.keyboard-input');

function createKeyboard() {
  const keyboardEl = document.createElement('div');

  keyboardEl.classList.add('keyboard', 'keyboard__keys');
  keyboardEl.appendChild(createKeys());

  document.body.appendChild(keyboardEl);
}

function createKeys() {
  const fragment = document.createDocumentFragment();
  const keyLayout = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?',
    'space'
  ];

  keyLayout.forEach(key => {
    const keyEl = document.createElement('button');
    const lineBreakEl = ['backspace', 'p', 'enter', '?'].indexOf(key) !== -1;

    keyEl.setAttribute('type', 'button');
    keyEl.classList.add('keyboard__key');
    keyEl.textContent = key;

    checkKey(keyEl, key);

    fragment.appendChild(keyEl);
    
    if (lineBreakEl) fragment.appendChild(document.createElement('br'));
  });

  return fragment;
}

function checkKey(keyEl, key) {
  switch (key) {
    case 'backspace':
      keyEl.innerHTML = addIcon('fas fa-backspace');
      keyEl.addEventListener('click', () => {
        keyboardInput.textContent = keyboardInput.value.substring(
          0,
          keyboardInput.value.length - 1,
        );
      });
      break;

    case 'enter':
      keyEl.innerHTML = addIcon('fas fa-long-arrow-alt-left');
      keyEl.addEventListener('click', () => {
        keyboardInput.textContent += '\n';
      });
      break;

    case 'caps':
      keyEl.classList.add('keyboard__key--capsLock');
      keyEl.innerHTML = addIcon('fas fa-angle-double-up');
      keyEl.addEventListener('click', () => {
        keyEl.classList.toggle('keyboard__key--capsLock-active');
        document.querySelectorAll('.keyboard__key--letters').forEach(key => {
          key.classList.toggle('keyboard__key--upperCase');
        });
      });
      break;

    case 'space':
      keyEl.classList.add('keyboard__key--wide');
      keyEl.addEventListener('click', () => {
        keyboardInput.textContent += ' ';
      });
      break;

    default:
      keyEl.classList.add('keyboard__key--letters');
      keyEl.addEventListener('click', () => {
        document
          .querySelector('.keyboard__key--capsLock')
          .classList.contains('keyboard__key--capsLock-active')
          ? (keyboardInput.textContent += key.toUpperCase())
          : (keyboardInput.textContent += key.toLowerCase());
      });
  }
}

function addIcon(iconName) {
  return `<i class='${iconName}'></i>`;
}

createKeyboard();
