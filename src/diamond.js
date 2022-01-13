const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function charRange(char) {

    let indexBase1 = alphabet.indexOf(char.toUpperCase()) + 1;

    if (indexBase1 === 0) {
        throw new Error('Input is not an alphabetic character.');
    }

    const slicedAlphabet = alphabet.slice(0, indexBase1);

    return slicedAlphabet;
}

function createQuadrant(charArray) {

    let clearArray = []
    let retArrays = []

    charArray.forEach(char => {
        clearArray.push('-');
    });

    charArray.forEach(char => {
        let array = clearArray.slice(0);
        array[array.length - charArray.indexOf(char) - 1] = char;

        retArrays.push(array);
    });

    return retArrays;
}

function mirrorByYAxis(arrays) {
    
    let retArrays = [];

    arrays.forEach(array => {
        let mirroredArray = array.concat(
            array.slice(0, array.length-1)
            .reverse()
        );

        retArrays.push(mirroredArray);
    });

    return retArrays;
}


module.exports = {
    charRange,
    createQuadrant,
    mirrorByYAxis
}