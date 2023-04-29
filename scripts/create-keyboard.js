import { createKeyRow } from './create-key-row.js';
import {
 fifthRow, firstRow, fourthRow, secondRow, thirdRow,
} from './keys.js';

export function createKeyboard(language) {
    // const keyboard = document.createElement('div');
    // keyboard.classList = 'keyboard';

    let keyboard = document.querySelector('.keyboard');

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

    const container = document.querySelector('.container');
    container.append(keyboard);
}