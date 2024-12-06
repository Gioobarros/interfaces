function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

export default factorial;