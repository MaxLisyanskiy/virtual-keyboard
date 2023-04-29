export function onMouseUp(e) {
    const $item = e.target.closest('.key');
    const code = $item ? $item.getAttribute('data-keycode') : '';

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
        $item.classList.remove('active');
        const caseDown = document.querySelectorAll('.caseDown');
        const caseUp = document.querySelectorAll('.caseUp');
        const caps = document.querySelectorAll('.caps');
        const shiftCaps = document.querySelectorAll('.shiftCaps');

        caseDown.forEach((item) => item.classList.remove('hidden'));
        caseUp.forEach((item) => item.classList.add('hidden'));
        caps.forEach((item) => item.classList.add('hidden'));
        shiftCaps.forEach((item) => item.classList.add('hidden'));
    } else if (code === 'CapsLock') {
        return false;
    }
}