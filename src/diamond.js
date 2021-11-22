const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function charRange (char) {
    
    if (!char.toLowerCase) {
        throw new TypeError('Input is not a string.');
    }

    let index = alphabet.indexOf(char.toUpperCase()) + 1;

    if (index === 0) {
        throw new Error('Input is not an alphabetic character.');
    }

    const slicedAlphabet = alphabet.slice(0, index+1);

    return slicedAlphabet;
}

module.exports = {
    charRange
}