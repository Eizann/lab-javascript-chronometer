const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}


// ==> BONUS
function printMilliseconds() {

}

function printSplit() {
  const createList = document.createElement('li');
  createList.appendChild(document.createTextNode(chronometer.split()))
  splitsElement.appendChild(createList);
}

function clearSplits() {
  chronometer.currentTime = 0;
  printTime();
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start') {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn()
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn split') printSplit();
  if (btnRightElement.className === 'btn reset') clearSplits();
});