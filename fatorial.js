function fatorial(n) {
  return n <= 1 ? 1 : n * fatorial(n - 1);
}
module.exports = fatorial;
