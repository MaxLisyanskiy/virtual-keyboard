import { createKeyboard } from './create-keyboard.js';

export function init(language, shift, caps) {
    const container = document.createElement('div');
    container.classList = 'container';
    container.innerHTML = `
        <h1 class="title">RSS "virtual-keyboard" | @MaxLisyanskiy</h1>
        <textarea class="textarea" id="textarea" rows="5" cols="50"></textarea>
    `;

    // const keyboard = document.createElement('div');
    // keyboard.classList = 'keyboard';

    // keyboard.append(createKeyRow(firstRow, language, shift, caps));
    // keyboard.append(createKeyRow(secondRow, language, shift, caps));
    // keyboard.append(createKeyRow(thirdRow, language, shift, caps));
    // keyboard.append(createKeyRow(fourthRow, language, shift, caps));
    // keyboard.append(createKeyRow(fifthRow, language, shift, caps));

    // container.append(keyboard);

    document.body.prepend(container);

    createKeyboard(language, shift, caps);

    const description = document.createElement('div');
    description.classList = 'description';
    description.innerHTML = `
        <h3 class="description__title">Клавиатура создана в операционной системе Windows</h3>
        <p class="description__subtitle">Для переключения языка комбинация: левыe <strong>ctrl + alt</strong></p>
    `;
    container.append(description);
}