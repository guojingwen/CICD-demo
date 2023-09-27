export function add(...args: number[]): number {
  return args.reduce((sum, it) => sum + it, 0);
}
export function muti(...args: number[]): number {
  return args.reduce((sum, it) => sum * it, 1.0);
}
