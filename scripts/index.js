import { init } from './init.js';
import { onMouseDown } from './mousedown.js';
import { onMouseUp } from './mouseup.js';
import { onKeyDown } from './keydown.js';
import { onKeyUp } from './keyup.js';
import { createKeyboard } from './create-keyboard.js';

let language = localStorage.getItem('language') ?? 'rus';

// Первичный рендер клавиатуры
init(language);

// const textarea = document.querySelector('textarea');

const $keyboard = document.querySelector('.keyboard');

function handleMouseDown(event) {
    const { changeLanguage } = onMouseDown(event);

    if (changeLanguage) {
        language = language === 'rus' ? 'en' : 'rus';
        localStorage.setItem('language', language);
        setTimeout(() => createKeyboard(language), 300);
    }
}

function handleMouseUp(event) {
    onMouseUp(event);
}

function handleKeyDown(event) {
    const { changeLanguage } = onKeyDown(event);

    if (changeLanguage) {
        language = language === 'rus' ? 'en' : 'rus';
        localStorage.setItem('language', language);
        setTimeout(() => createKeyboard(language), 300);
    }
}

function handleKeyUp(event) {
    onKeyUp(event);
}

// добавляем слушатель события
$keyboard.addEventListener('mousedown', (event) => handleMouseDown(event));
$keyboard.addEventListener('mouseup', (event) => handleMouseUp(event));
document.addEventListener('keydown', (event) => handleKeyDown(event));
document.addEventListener('keyup', (event) => handleKeyUp(event));