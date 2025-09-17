// 故意触发测试失败
const sum = (a, b) => a + b;

test('sum function should work correctly', () => {
  expect(sum(1, 1)).toBe(3); // 错误：预期2实际3
  expect(sum(2, 3)).toBe(6); // 错误：预期5实际6
});
