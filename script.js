const pixelBoard = document.querySelector('#pixel-board');

function quadroPixel() {
  for (let i = 0; i < 25; i += 1) {
    const quadro = document.createElement('div');
    quadro.className = 'pixel';
    pixelBoard.appendChild(quadro);
  }
}
quadroPixel();
function addClass() {
  window.onload = addClass;

  const newClass = document.getElementById('black');
  newClass.classList.add('selected');
}
addClass();
const cor = document.querySelectorAll('.color');
for (let i = 0; i < cor.length; i += 1) {
  cor[i].addEventListener('click', selector);
}
function selector() {
  for (let i = 0; i < cor.length; i += 1) {
    cor[i].classList = 'color';
  }
  this.classList.add('selected');
}

function selectColor(paint) {
  const selectedColor = document.querySelector('.selected');
  const color = getComputedStyle(selectedColor).getPropertyValue('background-color');
  paint.target.style.backgroundColor = color;
}

function coloringPixel() {
  pixelBoard.addEventListener('click', selectColor);
}

coloringPixel();

function buttonLimpar() {
  const botaoClear = document.querySelector('#btn');
  const novoBotaoClear = document.createElement('button');
  novoBotaoClear.id = 'clear-board';
  novoBotaoClear.innerText = 'Limpar';
  botaoClear.appendChild(novoBotaoClear);
}
buttonLimpar();

function clear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
function btn() {
  const btn2 = document.getElementById('btn');
  btn2.addEventListener('click', clear);
}
btn();
