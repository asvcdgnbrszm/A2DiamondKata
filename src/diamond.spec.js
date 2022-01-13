const { charRange } = require('./diamond.js');
const { createQuadrant } = require('./diamond.js');
const { mirrorByYAxis } = require('./diamond.js');

// Aufgabe a
describe('charRange', () => {
    it('should throw an error when input is not a string', () => {
        expect(() => charRange([])).toThrowError;
    })
    it('should throw an error when input is not a string', () => {
        expect(() => charRange(['a'])).toThrowError;
    })
    it('should throw an error when input is empty', () => {
        expect(() => charRange('')).toThrowError;
    })
    it('should throw an error for invalid character', () => {
        expect(() => charRange('3')).toThrowError;
    })
    it('should return array with all characters up to given character', () => {
        expect(charRange('A')).toStrictEqual(['A']);
    })
    it('should return array with all characters up to given character', () => {
        expect(charRange('d')).toStrictEqual(['A','B','C','D']);
    })
})

// Aufgabe b
// Im feedback schrieben Sie, dass die Tests hier unzureichend sind..
// ich verstehe aber nicht ganz warum. Alle Probleme die mit falschen Inputs
// zusammenhängen, werden doch bereits von der Funktion charRange abgefangen.
// Ansonsten habe ich nun noch ein paar Tests ergänzt, um die gewünschte Funktion besser
// zu verdeutlichen.
describe('createQuadrant', () => {
    it('should return an array for each character', () => {
        expect(createQuadrant(charRange('a'))).toStrictEqual([
            ['A']
        ])
    })
    it('should return an array for each character', () => {
        expect(createQuadrant(charRange('B'))).toStrictEqual([
            ['-','A'], 
            ['B','-']
        ])
    })
    it('should return an array for each character', () => {
        expect(createQuadrant(charRange('c'))).toStrictEqual([
            ['-','-','A'], 
            ['-','B','-'],
            ['C','-','-']
        ])
    })
    it('should return an array for each character', () => {
        expect(createQuadrant(charRange('D'))).toStrictEqual([
            ['-','-','-','A'], 
            ['-','-','B','-'],
            ['-','C','-','-'],
            ['D','-','-','-']
        ])
    }) 
})

// Aufgabe c
describe('mirrorByYAxis', () => {
    it('should return array of arrays containing mirrored arrays ', () => {
        expect(mirrorByYAxis(createQuadrant(charRange('a')))).toStrictEqual([
            ['A'] 
        ])
    })
    it('should return array of arrays containing mirrored arrays ', () => {
        expect(mirrorByYAxis(createQuadrant(charRange('B')))).toStrictEqual([
            ['-','A','-'], 
            ['B','-','B']  
        ])
    })
    it('should return array of arrays containing mirrored arrays ', () => {
        expect(mirrorByYAxis(createQuadrant(charRange('c')))).toStrictEqual([
            ['-','-','A','-','-'], 
            ['-','B','-','B','-'],
            ['C','-','-','-','C']
        ])
    })
})
