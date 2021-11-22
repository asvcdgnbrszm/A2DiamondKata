const { charRange } = require('./diamond.js');
const { createQuadrant } = require('./diamond.js');
const { mirrorByYAxis } = require('./diamond.js');
const { mirrorByXAxis } = require('./diamond.js');

// Aufgabe a
describe('charRange', () => {
    it('should throw a TypeError when input is not a string', () => {
        expect(() => charRange([])).toThrow(TypeError);
    })
})

describe('charRange', () => {
    it('should throw an error for invalid character', () => {
        expect(() => charRange('3')).toThrowError;
    })
})

describe('charRange', () => {
    it('should return array with all characters up to given character', () => {
        expect(charRange('A')).toStrictEqual(['A']);
    })
})

describe('charRange', () => {
    it('should return array with all characters up to given character', () => {
        expect(charRange('d')).toStrictEqual(['A','B','C','D']);
    })
})

// Aufgabe b
describe('createQuadrant', () => {
    it('should return an array for each character', () => {
        expect(createQuadrant(charRange('c'))).toStrictEqual([
            ['-','-','A'], 
            ['-','B','-'],
            ['C','-','-']
        ])
    })
})

describe('createQuadrant', () => {
    it('should return an array for each character', () => {
        expect(createQuadrant(charRange('a'))).toStrictEqual([
            ['A']
        ])
    })
})

// Aufgabe c
describe('mirrorByYAxis', () => {
    it('should return array of arrays containing mirrored arrays ', () => {
        expect(mirrorByYAxis(createQuadrant(charRange('c')))).toStrictEqual([
            ['-','-','A','-','-'], 
            ['-','B','-','B','-'],
            ['C','-','-','-','C']
        ])
    })
})

describe('mirrorByYAxis', () => {
    it('should return array of arrays containing horizontally mirrored arrays', () => {
        expect(mirrorByYAxis(createQuadrant(charRange('a')))).toStrictEqual([
            ['A'] 
        ])
    })
})

// Aufgabe d
describe('mirrorByXAxis', () => {
    it('should return array of arrays containing vertically mirrored arrays', () => {
        expect(mirrorByXAxis(mirrorByYAxis(createQuadrant(charRange('c'))))).toStrictEqual([
            ['-','-','A','-','-'], 
            ['-','B','-','B','-'],
            ['C','-','-','-','C'],
            ['-','B','-','B','-'],
            ['-','-','A','-','-']
        ])
    })
})

describe('mirrorByXAxis', () => {
    it('should return array of arrays containing vertically mirrored arrays', () => {
        expect(mirrorByXAxis(mirrorByYAxis(createQuadrant(charRange('a'))))).toStrictEqual([
            ['A'] 
        ])
    })
})