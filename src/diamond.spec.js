const { charRange } = require('./diamond.js');
const { createQuadrant } = require('./diamond.js');
const { mirrorByYAxis } = require('./diamond.js');
const { mirrorByXAxis } = require('./diamond.js');
const { diamond } = require('./diamond.js');

// Aufgabe a
describe('charRange', () => {
    it('should throw a TypeError when input is empty', () => {
        expect(() => charRange()).toThrow(TypeError);
    })

    it('should throw a TypeError when input is not a string', () => {
        expect(() => charRange([])).toThrow(TypeError);
    })

    it('should throw an error for invalid character', () => {
        expect(() => charRange('3')).toThrowError;
    })

    it('should return an array containing A', () => {
        expect(charRange('A')).toStrictEqual(['A']);
    })

    it('should return an array with all characters up to the given character (including)', () => {
        expect(charRange('d')).toStrictEqual(['A','B','C','D']);
    })
})

// Aufgabe b
describe('createQuadrant', () => {
    it('should return an array for each character in the given array', () => {
        letterArray = charRange('c');
        quadrantArray = createQuadrant(letterArray);
        expect(quadrantArray).toStrictEqual([
            ['-','-','A'], 
            ['-','B','-'],
            ['C','-','-']
        ])
    })

    it('should return an array with an array containing A', () => {
        letterArray = charRange('a');
        quadrantArray = createQuadrant(letterArray);
        expect(quadrantArray).toStrictEqual([
            ['A']
        ])
    })
})

// Aufgabe c
describe('mirrorByYAxis', () => {
    it('should return an array of arrays containing horizontally mirrored arrays', () => {
        letterArray = charRange('c');
        quadrantArray = createQuadrant(letterArray);
        yMirroredArray = mirrorByYAxis(quadrantArray);
        expect(yMirroredArray).toStrictEqual([
            ['-','-','A','-','-'], 
            ['-','B','-','B','-'],
            ['C','-','-','-','C']
        ])
    })

    it('should return an array with an array containing A', () => {
        letterArray = charRange('a');
        quadrantArray = createQuadrant(letterArray);
        yMirroredArray = mirrorByYAxis(quadrantArray);
        expect(yMirroredArray).toStrictEqual([
            ['A'] 
        ])
    })
})

// Aufgabe d
describe('mirrorByXAxis', () => {
    it('should return array of arrays containing vertically mirrored arrays', () => {
        letterArray = charRange('c');
        quadrantArray = createQuadrant(letterArray);
        yMirroredArray = mirrorByYAxis(quadrantArray);
        xMirroredArray = mirrorByXAxis(yMirroredArray);
        expect(xMirroredArray).toStrictEqual([
            ['-','-','A','-','-'], 
            ['-','B','-','B','-'],
            ['C','-','-','-','C'],
            ['-','B','-','B','-'],
            ['-','-','A','-','-']
        ])
    })

    it('should return array of arrays containing A', () => {
        letterArray = charRange('a');
        quadrantArray = createQuadrant(letterArray);
        yMirroredArray = mirrorByYAxis(quadrantArray);
        xMirroredArray = mirrorByXAxis(yMirroredArray);
        expect(xMirroredArray).toStrictEqual([
            ['A'] 
        ])
    })
})

// Aufgabe e
describe('diamond', () => {
    it('should print a string containing the data of all arrays', () => {
        
        const mockLog = jest.fn();
        
        diamondString = diamond('c', mockLog);
        
        expect(mockLog.mock.calls[0][0]).toBe('--A--\n-B-B-\nC---C\n-B-B-\n--A--\n');
    })

    it('should print error message: not a string', () => {
        
        const mockLog = jest.fn();
        
        diamondString = diamond([], mockLog);
        
        expect(mockLog.mock.calls[0][0]).toBe('TypeError: Input is not a string.');
    })

    it('should print error message: not an alphabetic character', () => {
        
        const mockLog = jest.fn();
        
        diamondString = diamond('', mockLog);
        
        expect(mockLog.mock.calls[0][0]).toBe('Error: Input is not an alphabetic character.');
    })
})