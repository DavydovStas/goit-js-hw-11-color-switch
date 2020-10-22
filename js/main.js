const refs = {
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
  background: document.querySelector('body'),
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

refs.startButton.addEventListener('click', () => {onStartClick()});
  
refs.stopButton.addEventListener('click', () => {onStopClick()})

function onStartClick() {
  if (refs.startButton.className === 'active') { return };
  timerId = setInterval(() => {
    refs.background.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`;
  }, 1000);
  refs.startButton.classList.add('active')
}

function onStopClick() {
  clearInterval(timerId);
  refs.startButton.classList.remove('active');
}
