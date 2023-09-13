import { add, muti } from '../src/js/math';
test('测试add', () => {
  expect(add(2, 3)).toBe(5);
});

test('测试muti', () => {
  expect(muti(2, 3)).toBe(6);
});
