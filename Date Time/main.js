const day = document.querySelector('.day');
const date = document.querySelector('.date');
const time = document.querySelector('.time');

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday'
]


day.textContent = `today is ${dayNames[new Date().getDay()]}`;


date.textContent = `it is ${monthNames[new Date().getMonth()]} 
  ${new Date().getDate()}, ${new Date().getFullYear()}`;


setInterval(() => {
  time.textContent = `the time is ${new Date().toLocaleTimeString()}`;
}, 1000)