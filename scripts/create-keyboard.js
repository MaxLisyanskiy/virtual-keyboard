import { createKeyRow } from './create-key-row.js';
import {
 fifthRow, firstRow, fourthRow, secondRow, thirdRow,
} from './keys.js';

export function createKeyboard(language) {
    let keyboard = document.querySelector('.keyboard');
    let lang = document.querySelector('.keyboard__language');

    if (keyboard) {
        keyboard.innerHTML = '';
    } else {
        keyboard = document.createElement('div');
        keyboard.classList = 'keyboard';
    }

    keyboard.append(createKeyRow(firstRow, language));
    keyboard.append(createKeyRow(secondRow, language));
    keyboard.append(createKeyRow(thirdRow, language));
    keyboard.append(createKeyRow(fourthRow, language));
    keyboard.append(createKeyRow(fifthRow, language));

    if (lang) {
        lang.innerHTML = `Keyboard language: <strong>${language.toUpperCase()}</strong>`;
    } else {
        lang = document.createElement('p');
        lang.classList = 'keyboard__language';
        lang.innerHTML = `Keyboard language: <strong>${language.toUpperCase()}</strong>`;
    }

    const container = document.querySelector('.container');
    container.append(keyboard);
    container.append(lang);
}