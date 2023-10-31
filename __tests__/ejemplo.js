function suma(a, b) {
    return a + b;
}

test('Suma de 4 + 5 es igual a 9', () => {
    expect(suma(4, 5)).toBe(9);
})

test('Suma de 4 + 5 es igual a 9', () => {
    expect(suma(3, 5)).toBe(9);
})