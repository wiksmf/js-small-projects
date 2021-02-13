const container = document.querySelector('.container');
const modalWrapper = document.querySelector('.modal-wrapper');
const overlay = document.querySelector('.modal-overlay');

const currentlyOpenModals = {};
let days;

// Load data from local JSON
async function loadData() {
  const res = await fetch('./file.json');
  const data = await res.json();
  renderHoliday(data);
  renderModal(data);
}

// Display each holiday from file.json
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

// Render modal for each holiday
function renderModal(data) {
  for (let i = 0; i < data.length; i++) {
    calcTimeLeft(data[i]);
    modalWrapper.insertAdjacentHTML(
      'beforeend',
      `<div class="modal display-flex hidden" id="modal-${i}">
        <button class="btn btn-x close-modal">x</button>
        <div class="modal__info">
          <p class="paragraph-1">The <span class="paragraph-bold">${data[i].holiday}</span> is an unofficial holiday observed on <span class="paragraph-bold">${data[i].date}</span> of each year!</p>
          <p class="paragraph-2">
            <span class="days">${days}</span> days until next ${data[i].holiday}</p>
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


// Calc days left until next holiday
function calcTimeLeft(data) {
  const holiday = new Date(`${data.date}, ${new Date().getFullYear()}`);
  const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    );
  
  days = Math.round((holiday - today) / (1000 * 60 * 60 * 24));
  if (days <= 0)  days += 365;
}

// Handling modals
document.addEventListener('click', clickEvent => {
  if (clickEvent.target.classList.contains('open-modal')) {
    const modalId = clickEvent.target.getAttribute('data-modal-id');
    const modal = document.getElementById(`${modalId}`);
    modal.classList.remove('hidden');
    overlay.classList.add('overlay');
    currentlyOpenModals[modalId] = modal;
  }
})

document.addEventListener('click', clickEvent => {
  if (clickEvent.target.classList.contains('close-modal')) {
    overlay.classList.remove('overlay');
    const modalToClose = clickEvent.target.closest('.modal');
    closeModal(modalToClose.id);
  }
})

document.addEventListener('keydown', keyEvent => {
  overlay.classList.remove('overlay');

  if (keyEvent.key === 'Escape')
    Object.keys(currentlyOpenModals).forEach(closeModal);
});

function closeModal(modalId) {
  const modal = currentlyOpenModals[modalId];
  modal.classList.add('hidden');
}

// Load data
loadData();