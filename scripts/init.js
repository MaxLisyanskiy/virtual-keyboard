import { createKeyboard } from './create-keyboard.js';

export function init(language) {
    const container = document.createElement('div');
    container.classList = 'container';
    container.innerHTML = `
        <h1 class="title">RSS "virtual-keyboard" | @MaxLisyanskiy</h1>
        <textarea class="textarea" id="textarea" rows="5" cols="50"></textarea>
    `;

    document.body.prepend(container);

    createKeyboard(language);

    const description = document.createElement('div');
    description.classList = 'description';
    description.innerHTML = `
        <h3 class="description__title">Клавиатура создана в операционной системе Windows</h3>
        <p class="description__subtitle">Для переключения языка комбинация: левыe <strong>Shift + Alt</strong></p>
    `;
    container.append(description);
}