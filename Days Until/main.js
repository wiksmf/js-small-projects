const container = document.querySelector('.container');
const modalWrapper = document.querySelector('.modal-wrapper');

const currentlyOpenModals = {};

let days = 21;
let hours = 22;
let minutes = 54;
let seconds = 22;

async function loadData() {
  const res = await fetch('./file.json');
  const data = await res.json();
  renderHoliday(data);
  renderModal(data);
}

function renderHoliday(data) {
  for (let i = 0; i < data.length; i++) {
    container.insertAdjacentHTML(
      'beforeend',
      `<figure class="holiday">
        <img class="holiday__img" src="images/img-${i}.jpg" alt="">
        <figcaption class="holiday__caption display-flex open-modal" data-modal-id="modal-${i}">${data[i].holiday}</figcaption>
      </figure>`,
    );
  }
}

function renderModal(data) {
  for (let i = 0; i < data.length; i++) {
    modalWrapper.insertAdjacentHTML(
      'beforeend',
      `<div class="modal hidden" id="modal-${i}">
        <button class="btn btn-x close-modal">&times;</button>
        <div class="modal__info">
          <p class="paragraph-1">The ${data[i].holiday} is an unofficial holiday observed on ${data[i].date} of each year!</p>
          <p class="paragraph-2">
            <span class="days">${days}</span> days, <span class="hours">${hours}</span> hours, 
            <span class="minutes">${minutes}</span> minutes, <span class="seconds">${seconds}</span> seconds until next ${data[i].holiday}</p>
        </div>
        <span class="attribution">Image by
          <a class="attribution__link" href="${data[i].attribution.link}">${ data[i].attribution.author}</a> 
          from <a class="attribution__link" href="${data[i].attribution.page}">Pixabay</a>
        </span>
        <button class="btn btn-ok close-modal">great 😊</button>
      </div>`,
    );
    document.querySelector(
      `#modal-${i}`,
    ).style.backgroundImage = `url(images/img-${i}.jpg)`;
  }
}

loadData();




// Handling modals
document.addEventListener('click', clickEvent => {
  if (clickEvent.target.classList.contains('open-modal')) {
    const modalId = clickEvent.target.getAttribute('data-modal-id');
    const modal = document.getElementById(`${modalId}`);
    modal.classList.remove('hidden');
    currentlyOpenModals[modalId] = modal;
  }
})

document.addEventListener('click', clickEvent => {
  if (clickEvent.target.classList.contains('close-modal')) {
    const modalToClose = clickEvent.target.closest('.modal');
    closeModal(modalToClose.id);
  }
})

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