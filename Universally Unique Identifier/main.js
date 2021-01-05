'use strict';

const btnCreate = document.querySelector('button');
const displayResult = document.querySelector('.result');

btnCreate.addEventListener('click', () => {

  let dayTime = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
    const randomValue = (dayTime + Math.random() * 16) % 16 | 0;
    dayTime = Math.floor(dayTime / 16);
    return (char == 'x' ? randomValue : (randomValue & 0x3 | 0x8)).toString(16);
  });

  displayResult.textContent = uuid;
});