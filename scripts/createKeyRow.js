export function createKeyRow(keysRow = []) {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList = 'keyboard__row';

    keysRow.forEach((item) => {
        const keys = document.createElement('div');
        keys.classList = `${item.class}`;
        keys.innerHTML = `
            <div class="rus">
                <span class="caseDown">${item.rus[0]}</span>
                <span class="caseUp hidden">${item.rus[1]}</span>
                <span class="caps hidden">${item.rus[2]}</span>
                <span class="shiftCaps hidden">${item.rus[3]}</span>
            </div>
            <div class="eng hidden">
                <span class="caseDown hidden">${item.eng[0]}</span>
                <span class="caseUp hidden">${item.eng[0]}</span>
                <span class="caps hidden">${item.eng[0]}</span>
                <span class="shiftCaps hidden">${item.eng[0]}</span>
            </div>
        `;
        keyboardRow.append(keys);
    });

    return keyboardRow;
}