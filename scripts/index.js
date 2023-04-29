import { createKeyRow } from './createKeyRow.js';
import {
 fifthRow, firstRow, fourthRow, secondRow, thirdRow,
} from './keys.js';

function init() {
    const container = document.createElement('div');
    container.classList = 'container';
    container.innerHTML = `
        <h1 class="title">RSS "virtual-keyboard" | @MaxLisyanskiy</h1>
        <textarea class="textarea" id="textarea" rows="5" cols="50"></textarea>
    `;

    const keyboard = document.createElement('div');
    keyboard.classList = 'keyboard';

    keyboard.append(createKeyRow(firstRow));
    keyboard.append(createKeyRow(secondRow));
    keyboard.append(createKeyRow(thirdRow));
    keyboard.append(createKeyRow(fourthRow));
    keyboard.append(createKeyRow(fifthRow));

    container.append(keyboard);

    const description = document.createElement('div');
    description.classList = 'description';
    description.innerHTML = `
        <h3 class="description__title">Клавиатура создана в операционной системе Windows</h3>
        <p class="description__subtitle">Для переключения языка комбинация: левыe <strong>ctrl + alt</strong></p>
    `;
    container.append(description);

    document.body.prepend(container);
}

init();