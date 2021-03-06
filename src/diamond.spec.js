const { charRange } = require('./diamond.js')

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