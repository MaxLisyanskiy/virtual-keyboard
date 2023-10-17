export function onMouseUp(e) {
    const $item = e.target.closest('.key');
    const code = $item ? $item.getAttribute('data-keycode') : '';

    if (!$item) return false;

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