const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function charRange (char) {

    let indexBase1 = alphabet.indexOf(char.toUpperCase()) + 1;

    if (indexBase1 === 0) {
        throw new Error('Input is not an alphabetic character.');
    }

    const slicedAlphabet = alphabet.slice(0, indexBase1);

    return slicedAlphabet;
}

module.exports = {
    charRange
}