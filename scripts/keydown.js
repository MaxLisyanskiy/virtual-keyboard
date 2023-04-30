export function onKeyDown(e) {
    e.preventDefault();

    let changeLanguage = false;

    const textarea = document.querySelector('#textarea');
    setTimeout(() => textarea.focus(), 0);

    const $item = document.querySelector(`[data-keycode=${e.code}]`);
    const { code } = e;

    if (!$item) return false;

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      const caseDown = document.querySelectorAll('.caseDown');
      const caseUp = document.querySelectorAll('.caseUp');
      const caps = document.querySelectorAll('.caps');
      const shiftCaps = document.querySelectorAll('.shiftCaps');

      const capsLock = document.querySelector('.key__caps-lock');

      if (capsLock.classList.contains('active')) {
        if ($item.classList.contains('active')) {
          caseDown.forEach((item) => item.classList.add('hidden'));
          caseUp.forEach((item) => item.classList.add('hidden'));
          caps.forEach((item) => item.classList.remove('hidden'));
          shiftCaps.forEach((item) => item.classList.add('hidden'));
        } else {
          $item.classList.add('active');
  
          caseDown.forEach((item) => item.classList.add('hidden'));
          caseUp.forEach((item) => item.classList.add('hidden'));
          caps.forEach((item) => item.classList.add('hidden'));
          shiftCaps.forEach((item) => item.classList.remove('hidden'));
        }
      } else {
        $item.classList.add('active');

        caseDown.forEach((item) => item.classList.add('hidden'));
        caseUp.forEach((item) => item.classList.remove('hidden'));
        caps.forEach((item) => item.classList.add('hidden'));
        shiftCaps.forEach((item) => item.classList.add('hidden'));
      }
    } else if (code === 'CapsLock') {
      const caseDown = document.querySelectorAll('.caseDown');
      const caseUp = document.querySelectorAll('.caseUp');
      const caps = document.querySelectorAll('.caps');
      const shiftCaps = document.querySelectorAll('.shiftCaps');
      const isActive = $item.closest('.active');
      const shiftLeft = document.querySelector('div[data-keycode="ShiftLeft"]');
      const shiftRight = document.querySelector('div[data-keycode="ShiftRight"]');

      if (isActive) {
        $item.classList.remove('active');

        if (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) {
          caseDown.forEach((item) => item.classList.add('hidden'));
          caseUp.forEach((item) => item.classList.remove('hidden'));
          caps.forEach((item) => item.classList.add('hidden'));
          shiftCaps.forEach((item) => item.classList.add('hidden'));
        } else {
          caseDown.forEach((item) => item.classList.remove('hidden'));
          caseUp.forEach((item) => item.classList.add('hidden'));
          caps.forEach((item) => item.classList.add('hidden'));
          shiftCaps.forEach((item) => item.classList.add('hidden'));
        }
      } else if (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) {
        $item.classList.add('active');

        caseDown.forEach((item) => item.classList.add('hidden'));
        caseUp.forEach((item) => item.classList.add('hidden'));
        caps.forEach((item) => item.classList.add('hidden'));
        shiftCaps.forEach((item) => item.classList.remove('hidden'));
      } else {
        $item.classList.add('active');

        caseDown.forEach((item) => item.classList.add('hidden'));
        caseUp.forEach((item) => item.classList.add('hidden'));
        caps.forEach((item) => item.classList.remove('hidden'));
        shiftCaps.forEach((item) => item.classList.add('hidden'));
      }
    } else if (code === 'Enter') {
      $item.classList.add('active');
      textarea.value += '\n';
    } else if (code === 'Tab') {
      $item.classList.add('active');
      textarea.value += '\u0009';
    } else if (code === 'Backspace') {
      $item.classList.add('active');
      textarea.value = textarea.value.substring(0, textarea.value.length - 1);
    } else if (code === 'Delete') {
      $item.classList.add('active');
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
      $item.classList.add('active');
      textarea.value += ' ';
    } else if (code === 'AltLeft') {
        $item.classList.add('active');
        const shift = document.querySelector('[data-keycode="ShiftLeft"]');

        if (shift.classList.contains('active')) {
            changeLanguage = true;
        }
    } else if (code === 'ArrowUp' || code === 'ArrowDown' || code === 'ArrowLeft' || code === 'ArrowRight') {
      $item.classList.add('active');
      textarea.value += $item.childNodes[1].innerText;
    } else {
      const elem = $item.childNodes[1].innerText;

      $item.classList.add('active');

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
  
    return { changeLanguage };
  }