const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function charRange(char) {

    let indexBase1 = 0;

    try {
        indexBase1 = alphabet.indexOf(char.toUpperCase()) + 1;
    } catch(err){
        throw new Error('Input is not a string.')
    }
    

    if (indexBase1 === 0) {
        throw new Error('Input is not an alphabetic character.');
    }

    const slicedAlphabet = alphabet.slice(0, indexBase1);

    return slicedAlphabet;
}


function createQuadrant(charArray) {

    const clearArray = []
    const retArrays = []

    charArray.forEach(char => {
        clearArray.push('-');
    });

    charArray.forEach(char => {
        const array = clearArray.slice(0);
        array[array.length - charArray.indexOf(char) - 1] = char;

        retArrays.push(array);
    });

    return retArrays;
}


function mirrorByYAxis(arrays) {
    
    const retArrays = [];

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

function diamond(input, log) {

    try {

        letterArray = charRange(input);
        quadrantArray = createQuadrant(letterArray);
        yMirroredArray = mirrorByYAxis(quadrantArray);
        xMirroredArray = mirrorByXAxis(yMirroredArray);
        
        let joinedString = '';

        xMirroredArray.forEach(array => {
            joinedString += array.join('') + '\n';
        });
    
        log(joinedString);
    }
    catch(e) {

        log(e.name + ": " + e.message);
    } 
}


module.exports = {
    charRange,
    createQuadrant,
    mirrorByYAxis,
    mirrorByXAxis,
    diamond
}