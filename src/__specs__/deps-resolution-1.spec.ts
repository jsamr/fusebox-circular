describe('loading modules', () => {
  it('should not throw when requiring module A after module C', () => {
    expect(() => {
        require('../modules/module-c')
        require('../modules/module-a')
    }).not.toThrow('ClassA should not be undefined')
  })
})
