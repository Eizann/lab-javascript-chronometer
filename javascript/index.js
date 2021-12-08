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

}

function clearSplits() {

}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start') {
    setStopBtn();
    setSplitBtn();
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn()
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.className === 'btn split') {
    let createList = document.createElement('li');
    createList.appendChild(document.createTextNode(chronometer.split()))
    splitsElement.appendChild(createList);
  } 
});


