const randomStrings = require('../index');


describe('Probar funcionalidades de la funcion Random Strings ', () => {
    test('Probar Random String', () => {
        expect(typeof(randomStrings())).toBe('string');
    });
    test('Probar si existe una ciudad', () => {
        expect(typeof randomStrings()).not.toMatch("Cordoba")
    });
    
});
