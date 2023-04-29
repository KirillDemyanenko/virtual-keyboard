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
  'Del',
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
let repeat = false;

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
  const spKeys = {
    Backquote: '`',
    Minus: '-',
    Equal: '=',
    BracketLeft: '[',
    BracketRight: ']',
    Backslash: `\\`,
    Semicolon: ';',
    Quote: `'`,
    Comma: ',',
    Period: '.',
    Slash: '/',
    ArrowUp: '↑',
    ArrowLeft: '←',
    ArrowDown: '↓',
    ArrowRight: '→',
  };
  for (let key of keysEn) {
    const keyEn = document.createElement('div');
    if (key.length === 1) {
      keyEn.classList.add('key__simple', 'key__en', `sym__${key}`);
      keyEn.innerText = key.toUpperCase();
    } else {
      keyEn.classList.add('key__simple', 'key__en', `special__${key}`);
      keyEn.id = key;
      if (Object.keys(spKeys).includes(key)) {
        keyEn.innerText = spKeys[key];
      } else {
        keyEn.innerText = key;
      }
    }
    document.addEventListener('keydown', (ev) => {
      console.log(ev.code);
      if (!ev.repeat) {
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
          case 'Backspace': {
            if (!repeat) {
              repeat = true;
              document
                .querySelector(`.special__${key}`)
                ?.classList.add('pressed');
              document.querySelector('textarea').value = document
                .querySelector('textarea')
                .value.slice(0, -1);
            }
            break;
          }
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
        case 'Backspace': {
          document
            .querySelector(`.special__${key}`)
            ?.classList.remove('pressed');
          repeat = false;
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
