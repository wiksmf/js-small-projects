// const btnCheck = document.querySelector('button');
// const dayDisplay = document.querySelector('.days');
// const hoursDisplay = document.querySelector('.hours');
// const minutesDisplay = document.querySelector('.minutes');
// const secondsDisplay = document.querySelector('.seconds');
// const timerDisplay = document.querySelector('.endTimer');

const btnOpenModal = document.querySelectorAll('.open-modal');
const btnCloseModal = document.querySelectorAll('.btn-close-modal');

const currentlyOpenModals = {};

// let inputDate;
// let days;
// let hours;
// let minutes;
// let seconds;

// function countdown() {
//   let timer = setInterval(() => {
//     let today = new Date().getTime();
//     let xmas = new Date('December 25, 2020').getTime();

//     let timeLeft = xmas - today;

//     days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//     updateDisplay();

//     if (timeLeft < 0) {
//       clearInterval(timer);
//       endTimer();
//     }
//   }, 1000);
// }

// function updateDisplay() {
//   dayDisplay.textContent = `${days}`;
//   hoursDisplay.textContent = `${hours}`;
//   minutesDisplay.textContent = `${minutes}`;
//   secondsDisplay.textContent = `${seconds}`;
// }

// function endTimer() {
//   dayDisplay.textContent = `0`;
//   hoursDisplay.textContent = `00`;
//   minutesDisplay.textContent = `00`;
//   secondsDisplay.textContent = `00`;
//   timerDisplay.textContent = `expired`;
// }

// countdown();

// Handling modals
btnOpenModal.forEach(btn =>
  btn.addEventListener('click', clickEvent => {
    const modalId = clickEvent.target.getAttribute('data-modal-id');
    const modal = document.getElementById(`${modalId}`);
    modal.classList.remove('hidden');
    currentlyOpenModals[modalId] = modal;
  }),
);

btnCloseModal.forEach(btn => {
  btn.addEventListener('click', clickEvent => {
    console.log(clickEvent.target.closest('.modal'));

    const modalToClose = clickEvent.target.closest('.modal');
    closeModal(modalToClose.id);
  });
});

document.addEventListener('keydown', keyEvent => {
  if (keyEvent.key === 'Escape')
    Object.keys(currentlyOpenModals).forEach(closeModal);
});

function closeModal(modalId) {
  const modal = currentlyOpenModals[modalId];
  modal.classList.add('hidden');
}

function closeModal(modalId) {
  const modal = currentlyOpenModals[modalId];
  modal.classList.add('hidden');
}
