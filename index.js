const keysEn = [
  '`',
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
  '-',
  '=',
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
  '[',
  ']',
  '|',
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
  ';',
  `'`,
  'Enter',
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  'ArrowUp',
  'Shift',
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Alt',
  'Ctrl',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
];

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
}

function generateKeys() {
  for (let key of keysEn) {
    const keyEn = document.createElement('div');
    keyEn.classList.add('key__simple', 'key__en', `sym__${key}`);
    keyEn.innerText = key.toUpperCase();
    document.addEventListener('keydown', (ev) => {
      switch (ev.code) {
        case `Key${key.toUpperCase()}`: {
          document.querySelector(`.sym__${key}`).classList.add('pressed');
          document.querySelector('textarea').value += key;
          break;
        }
        case `Digit${key}`: {
          document.querySelector(`.sym__${key}`).classList.add('pressed');
          document.querySelector('textarea').value += key;
          break;
        }
      }
    });
    document.addEventListener('keyup', (ev) => {
      switch (ev.code) {
        case `Key${key.toUpperCase()}`: {
          document.querySelector(`.sym__${key}`).classList.remove('pressed');
          break;
        }
        case `Digit${key}`: {
          document.querySelector(`.sym__${key}`).classList.remove('pressed');
          break;
        }
      }
    });
    document.querySelector('.keyboard').append(keyEn);
  }
}

function start() {
  generateTextDisplayArea();
  generateKeyboard();
  generateKeys();
}

start();
