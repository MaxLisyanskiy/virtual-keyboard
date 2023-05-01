export function onKeyUp(e) {
    e.preventDefault();

    let $item;
    const { code } = e;

    if (!code) {
        if (e.key === 'Shift') {
            $item = document.querySelector('[data-keycode="ShiftRight"]');
        } else {
            return false;
        }
    } else if (document.querySelector(`[data-keycode=${e.code}]`)) {
        $item = document.querySelector(`[data-keycode=${e.code}]`);
    } else {
        return false;
    }

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
        const caseDown = document.querySelectorAll('.caseDown');
        const caseUp = document.querySelectorAll('.caseUp');
        const caps = document.querySelectorAll('.caps');
        const shiftCaps = document.querySelectorAll('.shiftCaps');

        const capsLock = document.querySelector('.key__caps-lock');

        if (capsLock.classList.contains('active')) {
            $item.classList.remove('active');
            caseDown.forEach((item) => item.classList.add('hidden'));
            caseUp.forEach((item) => item.classList.add('hidden'));
            caps.forEach((item) => item.classList.remove('hidden'));
            shiftCaps.forEach((item) => item.classList.add('hidden'));
        } else {
            $item.classList.remove('active');

            caseDown.forEach((item) => item.classList.remove('hidden'));
            caseUp.forEach((item) => item.classList.add('hidden'));
            caps.forEach((item) => item.classList.add('hidden'));
            shiftCaps.forEach((item) => item.classList.add('hidden'));
        }
    } else if (code === 'CapsLock') {
        return false;
    } else {
        $item.classList.remove('active');
    }

    return false;
}