// Failing test for workflow validation

describe('Failing Test Suite', () => {
  test('this test should always fail', () => {
    expect(1 + 1).toBe(3); // Intentional failure
  });

  test('another failing test', () => {
    const result = 'hello';
    expect(result).toBe('world'); // This will fail
  });

  test('test with syntax error', () => {
    // Missing closing parenthesis
    expect(Math.max(1, 2, 3).toBe(3);
  });
});