export function onMouseDown(e) {
  const textarea = document.querySelector('#textarea');
  setTimeout(() => textarea.focus(), 0);

  const $item = e.target.closest('.key');
  const code = $item ? $item.getAttribute('data-keycode') : '';

  if (!$item) return false;

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    $item.classList.add('active');
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
    const caps = document.querySelectorAll('.caps');
    const shiftCaps = document.querySelectorAll('.shiftCaps');

    caseDown.forEach((item) => item.classList.add('hidden'));
    caseUp.forEach((item) => item.classList.remove('hidden'));
    caps.forEach((item) => item.classList.add('hidden'));
    shiftCaps.forEach((item) => item.classList.add('hidden'));
  } else if (code === 'CapsLock') {
    const caseDown = document.querySelectorAll('.caseDown');
    const caseUp = document.querySelectorAll('.caseUp');
    const caps = document.querySelectorAll('.caps');
    const shiftCaps = document.querySelectorAll('.shiftCaps');
    const isActive = $item.closest('.active');

    if (isActive) {
      $item.classList.remove('active');

      caseDown.forEach((item) => item.classList.remove('hidden'));
      caseUp.forEach((item) => item.classList.add('hidden'));
      caps.forEach((item) => item.classList.add('hidden'));
      shiftCaps.forEach((item) => item.classList.add('hidden'));
    } else {
      $item.classList.add('active');

      caseDown.forEach((item) => item.classList.add('hidden'));
      caseUp.forEach((item) => item.classList.add('hidden'));
      caps.forEach((item) => item.classList.remove('hidden'));
      shiftCaps.forEach((item) => item.classList.add('hidden'));
    }
  } else if (code === 'Enter') {
    textarea.value += '\n';
  } else if (code === 'Tab') {
    textarea.value += '\u0009';
  } else if (code === 'Backspace') {
    textarea.value = textarea.value.substring(0, textarea.value.length - 1);
  } else if (code === 'Delete') {
    let pos = 0;
    if (document.selection) {
      textarea.focus();
      const sel = document.selection.createRange();
      sel.moveStart('character', -textarea.value.length);
      pos = sel.text.length;
    } else if (textarea.selectionStart || textarea.selectionStart === '0') {
      pos = textarea.selectionStart;
    }
    textarea.value = textarea.value.slice(0, pos) + textarea.value.slice(pos + 1);
    textarea.setSelectionRange(pos, pos);
  } else if (code === 'Space') {
    textarea.value += ' ';
  } else if (code === 'ArrowUp' || code === 'ArrowDown' || code === 'ArrowLeft' || code === 'ArrowRight') {
    textarea.value += $item.childNodes[1].innerText;
  } else {
    const elem = $item.childNodes[1].innerText;

    if (elem.length > 1) return false;

    if (!$item.childNodes[1].classList.contains('hidden')) {
      textarea.value += $item.childNodes[1].innerText;
    } else if (!$item.childNodes[3].classList.contains('hidden')) {
      textarea.value += $item.childNodes[3].innerText;
    } else if (!$item.childNodes[5].classList.contains('hidden')) {
      textarea.value += $item.childNodes[5].innerText;
    } else if (!$item.childNodes[7].classList.contains('hidden')) {
      textarea.value += $item.childNodes[7].innerText;
    }
  }

  return false;
}