export function createKeyRow(keysRow = [], language = 'rus') {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList = 'keyboard__row';

    keysRow.forEach((item) => {
        const keys = document.createElement('div');
        keys.classList = `${item.class}`;
        keys.setAttribute('data-keycode', item.keycode);
        keys.innerHTML = `
            <span class="caseDown">${language === 'rus' ? item.rus[0] : item.eng[0]}</span>
            <span class="caseUp hidden">${language === 'rus' ? item.rus[1] : item.eng[1]}</span>
            <span class="caps hidden">${language === 'rus' ? item.rus[2] : item.eng[2]}</span>
            <span class="shiftCaps hidden">${language === 'rus' ? item.rus[3] : item.eng[3]}</span>
        `;
        keyboardRow.append(keys);
    });

    return keyboardRow;
}