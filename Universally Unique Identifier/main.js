'use strict';

const btnCreate = document.querySelector('.btn-create');
const btnCopy = document.querySelector('.btn-copy');
const displayUUID = document.querySelector('.uuid');

const id = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';

btnCreate.addEventListener('click', () => {
  let dayTime = new Date().getTime();

  const uuid = id.replace(/[x]/g, char => {
    const randomValue = (dayTime + Math.random() * 16) % 16 | 0;
    dayTime = Math.floor(dayTime / 16);

    return (char == 'x' ? randomValue : (randomValue & 0x3) | 0x8).toString(16);
  });

  displayUUID.value = uuid;
});

btnCopy.addEventListener('click', () => {
  displayUUID.select();
  document.execCommand('copy');
});
