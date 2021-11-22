function charRange(char) {

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    if (char === undefined) {
        throw new TypeError('No input given.')
    }

    if (!char.toLowerCase) {
        throw new TypeError('Input is not a string.');
    }

    const index = alphabet.indexOf(char.toUpperCase()) + 1;

    if (index === 0) {
        throw new Error('Input is not an alphabetic character.');
    }

    const slicedAlphabet = alphabet.slice(0, index);

    return slicedAlphabet;
}


function createQuadrant(charArray, placeholder) {

    const clearArray = []
    const retArrays = []

    if (placeholder === undefined) {
        placeholder = '-';
    }

    charArray.forEach(char => {
        clearArray.push(placeholder);
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
        const mirroredArray = array.concat(array.slice(0, array.length-1).reverse());

        retArrays.push(mirroredArray);
    });

    return retArrays;
}


function mirrorByXAxis(arrays) {
    
    const mirroredArray = arrays.concat(arrays.slice(0, arrays.length-1).reverse());

    return mirroredArray;
}


function diamond(input, log) {

    try {

        if (input === undefined) {
            throw new TypeError('No input given.')
        }
        letterArray = charRange(input[0]);
        quadrantArray = createQuadrant(letterArray, input[1]);
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