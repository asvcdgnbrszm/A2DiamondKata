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
        let mirroredArray = mirrorArray(array);

        retArrays.push(mirroredArray);
    });

    return retArrays;
}

function mirrorByXAxis(arrays) {
    
    let mirroredArray = mirrorArray(arrays);

    return mirroredArray;
}

function mirrorArray(array){
    let mirrored = array.concat(
        array.slice(0, array.length-1)
        .reverse()
    );
    return mirrored;
}

module.exports = {
    charRange,
    createQuadrant,
    mirrorByYAxis,
    mirrorByXAxis
}