const keysRu = [
  'Backquote',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'Delete',
  'CapsLock',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'Semicolon',
  `Quote`,
  'Enter',
  'ShiftLeft',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'ControlRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
];
const keysEn = [
  'Backquote',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'Delete',
  'CapsLock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'Semicolon',
  `Quote`,
  'Enter',
  'ShiftLeft',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'ControlRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
];
const spKeys = {
  Backquote: ['`', 'Ё'],
  Minus: ['-', '-'],
  Equal: ['=', '='],
  BracketLeft: ['[', 'Х'],
  BracketRight: [']', 'Ъ'],
  Backslash: [`\\`, `\\`],
  Semicolon: [';', 'Ж'],
  Quote: [`'`, 'Э'],
  Comma: [',', 'Б'],
  Period: ['.', 'Ю'],
  Slash: ['/', '.'],
  ArrowUp: ['↑', '↑'],
  ArrowLeft: ['←', '←'],
  ArrowDown: ['↓', '↓'],
  ArrowRight: ['→', '→'],
  ShiftRight: ['Shift', 'Shift'],
  ShiftLeft: ['Shift', 'Shift'],
  ControlLeft: ['Ctrl', 'Ctrl'],
  ControlRight: ['Ctrl', 'Ctrl'],
  AltLeft: ['Alt', 'Alt'],
  AltRight: ['Alt', 'Alt'],
  MetaLeft: ['Win', 'Win'],
  Space: [
    'EN - for change Alt+Shift/Ctrl+Shift',
    'РУС - для смены Alt+Shift/Ctrl+Shift',
  ],
};
let caps = false;

function generateKeyboard() {
  const keyboard = document.createElement('section');
  keyboard.classList.add('keyboard');
  document.body.append(keyboard);
}

function generateTextDisplayArea() {
  const textDisplayArea = document.createElement('section');
  const textArea = document.createElement('textarea');
  textDisplayArea.classList.add('textDisplayArea');
  textDisplayArea.append(textArea);
  document.body.append(textDisplayArea);
  // document.querySelector('textarea').disabled = true;
}

function generateKeys(keys) {
  for (const key of keys) {
    const k = document.createElement('div');
    const id =
      keysEn[
        keysEn.indexOf(key) > 0 ? keysEn.indexOf(key) : keysRu.indexOf(key)
      ];
    k.id =
      id.length > 1
        ? id
        : `${
            parseInt(id, 10) >= 0
              ? 'Digit'.concat(id)
              : 'Key'.concat(id.toUpperCase())
          }`;

    if (key.length === 1) {
      k.classList.add('key__simple', 'key__en', `sym__${key}`);
      k.innerText = key.toUpperCase();
    } else {
      k.classList.add('key__simple', 'key__en', `special__${key}`);
      if (Object.keys(spKeys).includes(key)) {
        k.innerText =
          spKeys[key][localStorage.getItem('lang') === 'en' ? 1 : 0];
      } else {
        k.innerText = key;
      }
    }
    if (key === 'CapsLock') {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      k.append(circle);
    }
    document.querySelector('.keyboard').append(k);
  }
}

function start() {
  generateTextDisplayArea();
  generateKeyboard();
  generateKeys(localStorage.getItem('lang') === 'en' ? keysRu : keysEn);
}

document.addEventListener('keydown', (ev) => {
  ev.preventDefault();
  if ((ev.shiftKey && ev.ctrlKey) || (ev.shiftKey && ev.altKey)) {
    localStorage.setItem(
      'lang',
      `${localStorage.getItem('lang') === 'ru' ? 'en' : 'ru'}`
    );
    document.querySelector('.keyboard').innerHTML = '';
    generateKeys(localStorage.getItem('lang') === 'en' ? keysRu : keysEn);
  } else {
    if (ev.code === 'CapsLock') {
      caps = !caps;
      document.querySelector('.circle').style.backgroundColor = caps
        ? '#FFCC33'
        : '#EEEEFF';
    }
    document.querySelector(`#${ev.code}`)?.classList?.add('pressed');
    if (ev.code === 'Enter') {
      document.querySelector('textarea').value += '\n';
    } else if (ev.code === 'Tab') {
      document.querySelector('textarea').value += '\t';
    } else if (ev.code === 'Backspace') {
      document.querySelector('textarea').value = document
        .querySelector('textarea')
        .value.slice(0, -1);
    } else if (ev.code === 'Bacqoute') {
      document.querySelector('textarea').value +=
        localStorage.getItem('lang') === 'ru' ? 'ё' : ev.key;
    } else if (
      ![
        'ShiftRight',
        'ShiftLeft',
        'ControlLeft',
        'AltLeft',
        'AltRight',
        'MetaLeft',
      ].includes(ev.code)
    ) {
      document.querySelector('textarea').value += ev.key;
    }
  }
});

document.addEventListener('keyup', (ev) => {
  document.querySelector(`#${ev.code}`)?.classList?.remove('pressed');
});

start();

document.addEventListener('mousedown', (ev) => {
  const event = new KeyboardEvent('keydown', {
    key: ev.target.textContent.toLowerCase(),
    code: ev.target.id,
  });
  document.dispatchEvent(event);
});

document.addEventListener('mouseup', (ev) => {
  const event = new KeyboardEvent('keyup', {
    key: ev.target.textContent.toLowerCase(),
    code: ev.target.id,
  });
  document.dispatchEvent(event);
});
