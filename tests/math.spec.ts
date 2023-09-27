import { add, muti } from '../src/js/math';
test('测试add', () => {
  expect(add(2, 3)).toBe(5);
});

test('测试add', () => {
  expect(add(2, 5, 3)).toBe(10);
});

test('测试muti', () => {
  expect(muti(2, 3)).toBe(6);
  expect(muti(4, 6, 2)).toBe(48);
});

test('测试number', () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3);
});
