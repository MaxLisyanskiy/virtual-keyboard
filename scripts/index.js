import { onMouseDown } from './mousedown.js';
import { init } from './init.js';
import { onMouseUp } from './mouseup.js';

const language = JSON.parse(localStorage.getItem('language')) ?? 'rus';

// Первичный рендер клавиатуры
init(language);

// const textarea = document.querySelector('textarea');

// const keys = document.querySelectorAll('.key');

const $keyboard = document.querySelector('.keyboard');

function handleMouseDown(event) {
    onMouseDown(event, language);
}

function handleMouseUp(event) {
    onMouseUp(event, language);
}

// добавляем слушатель события
$keyboard.addEventListener('mousedown', (event) => handleMouseDown(event));
$keyboard.addEventListener('mouseup', (event) => handleMouseUp(event));