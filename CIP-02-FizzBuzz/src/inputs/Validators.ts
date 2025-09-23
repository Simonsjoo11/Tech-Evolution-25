const MAX = 1_000_000_000_000_000n; // 10^15

export function validateInput(rawInput: string): bigint {
  // Remove whitespace from input
  const trimmed = rawInput.trim();

  if (!/^\d+$/.test(trimmed)) {
    throw new Error('N must be a positive integer string.');
  }

  const n = BigInt(trimmed);

  if (n < 1n) {
    throw new Error('N must be ≥ 1.');
  }
  if (n > MAX) {
    throw new Error('N must be ≤ 1e15.');
  }

  return n;
}
