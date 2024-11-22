

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 

     expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

test('one dollar should be 154.46 yens', () => {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    expect(yen).toBe(154.46); 
});

test('one yen should be 0.0052 pounds', () => {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(1); 
    expect(pounds).toBe(0.0052);
});
