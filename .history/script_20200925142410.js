/* jshint esversion:6 */

const keyMap = {'q': 'C4', '2': 'Db4', 'w': 'D4', 
'3': 'Eb4', 'e': 'E4', 'r': 'F4', '5': 'Gb4', 
't': 'G4', '6': 'Ab4', 'y': 'A4', '7': 'Bb4', 
'u': 'B4', 'i': 'C5', '9': 'Db5', 'o': 'D5', 
'0': 'Eb5', 'p': 'E5'};

function playAnimation(keyName) {
    const curKey = document.querySelector('.' + keyName);
    curKey.classList.add('active');
    setTimeout(() => curKey.classList.remove('active'), 200);
}

function playSound(audio) {
    const clone = audio.cloneNode();
    clone.play();
    var volume = 0.8;
    var time = 400;
    for(let i = 0; i < 5; i++) {
        setTimeout(() => (clone.volume = volume), time);
        volume -= 0.2;
        time += 400;
    }
}

document.addEventListener('keypress', (event) => {
    const curKeyPressed = event.key;
    const name = keyMap[curKeyPressed];
    playAnimation(name);
    playSound(new Audio('sounds/' + name + '.mp3'));
}); 