export function add(...args: number[]): number {
  return args.reduce((sum, it) => sum + it, 0);
}
export function muti(a: number, b: number): number {
  return a * b;
}
