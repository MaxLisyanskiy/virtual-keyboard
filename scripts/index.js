import { createKeyRow } from './createKeyRow.js';
import { fifthRow, firstRow, fourthRow, secondRow, thirdRow } from './keys.js';

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
document.body.prepend(container);