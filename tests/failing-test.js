// This test file contains intentional test failures

describe('Failing Tests', () => {
    test('this test should always fail', () => {
        expect(true).toBe(false); // Intentional failure
    });
    
    test('another failing test', () => {
        const result = 2 + 2;
        expect(result).toBe(5); // Wrong expectation
    });
    
    test('test with syntax error', () => {
        // Missing closing parenthesis
        expect(1 + 1.toBe(3)
    });
});