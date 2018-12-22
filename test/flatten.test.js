const flatten = require('../src/flatten');

test('flatten', () => {
    const array = [1, 2, 3, 4, 5];
    const array1 = [1, 2, [3, 4, 5]];
    const array2 = [1, 2, [3, 4, [5]]];

    expect(flatten(array1)).toEqual(array);
    expect(flatten(array2)).toEqual(array);
});
