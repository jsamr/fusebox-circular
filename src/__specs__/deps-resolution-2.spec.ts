describe('loading modules', () => {
    it('should throw when requiring module C after module A', () => {
        expect(() => {
            require('../modules/module-a')
            require('../modules/module-c')
        }).toThrow('ClassA should not be undefined')
    })
})
