function generateKeyboard() {
    const keyboard = document.createElement('section')
    keyboard.classList.add('keyboard')
    document.body.append(keyboard)
}

function generateTextDisplayArea() {
    const textDisplayArea = document.createElement('section')
    const textArea = document.createElement('textarea')
    textDisplayArea.classList.add('textDisplayArea')
    textDisplayArea.append(textArea)
    document.body.append(textDisplayArea)
}

function generateKeysFirstRow() {
    const keysEn = `\`1234567890-=`
    for (let sym of keysEn) {
        const keyEn = document.createElement('div')
        keyEn.classList.add('key__simple', 'key__en', `sym__${sym}`)
        keyEn.innerText = sym
        document.addEventListener('keydown', (ev) => {
            if (ev.code === `Digit${sym}`) {
                document.querySelector(`.sym__${sym}`).classList.add('pressed')
            }
        })
        document.addEventListener('keyup', (ev) => {
            if (ev.code === `Digit${sym}`) {
                document.querySelector(`.sym__${sym}`).classList.remove('pressed')
            }
        })
        document.querySelector('.keyboard').append(keyEn)
    }
    const keyEn = document.createElement('div')
    keyEn.classList.add('key__simple', 'backspace', `sym__backspace`)
    keyEn.innerText = 'Backspace'
    document.addEventListener('keydown', (ev) => {
        if (ev.code === `Backspace`) {
            document.querySelector(`.backspace`).classList.add('pressed')
        }
    })
    document.addEventListener('keyup', (ev) => {
        if (ev.code === `Backspace`) {
            document.querySelector(`.backspace`).classList.remove('pressed')
        }
    })
    document.querySelector('.keyboard').append(keyEn)

}

function generateKeys() {
    generateKeysFirstRow()
    const simpleKeysEn = `qwertyuiop[]asdfghjkl;'zxcvbnm,./`
    const simpleKeysRu = `йцукенгшщзхъфывапролджэячсмитьбю.`
    for (let sym of simpleKeysEn) {
        const keyEn = document.createElement('div')
        keyEn.classList.add('key__simple', 'key__en', `sym__${sym}`)
        keyEn.innerText = sym
        document.addEventListener('keydown', (ev) => {
            if (ev.code === `Key${sym.toUpperCase()}`) {
                document.querySelector(`.sym__${sym}`).classList.add('pressed')
            }
        })
        document.addEventListener('keyup', (ev) => {
            if (ev.code === `Key${sym.toUpperCase()}`) {
                document.querySelector(`.sym__${sym}`).classList.remove('pressed')
            }
        })
        document.querySelector('.keyboard').append(keyEn)
    }
    for (let sym of simpleKeysRu) {
        const keyRu = document.createElement('div')
        keyRu.classList.add('key__simple', 'key__en')
        keyRu.innerText = sym
        keyRu.style.display = 'none'
        document.querySelector('.keyboard').append(keyRu)
    }

}

function start() {
    generateTextDisplayArea()
    generateKeyboard()
    generateKeys()
}



start()
