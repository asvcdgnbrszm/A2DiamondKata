const { sum } = require('./diamond.js')

describe('sum', () => {
    it('should return 0 for empty array', () => {
        const result = sum([])
        expect(result).toBe(0);
    })
})