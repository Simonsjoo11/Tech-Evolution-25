import { Rule } from '../rules/Rule';

export class FizzBizzCounter {
  constructor(private readonly rules: ReadonlyArray<Rule>) {
    if (rules.length === 0) {
      throw new Error('At least one rule must be provided');
    }

    for (const r of rules) {
      if (!r.label || typeof r.label !== 'string') {
        throw new Error('Rule label must be a non-empty string');
      }
      if (!Number.isInteger(r.divisor) || r.divisor <= 0) {
        throw new Error('Rule divisor must be a positive integer');
      }
    }
  }

  // Count how many times each rule triggersin [1..n]

  countUpTo(N: bigint): Record<string, bigint> {
    if (N < 1n) throw new Error('n must be at least 1');
    if (N > 1_000_000_000_000_000n)
      throw new Error('n must be at most <= 1e15');

    const result: Record<string, bigint> = {};

    for (const rule of this.rules) {
      const d = BigInt(rule.divisor);
      result[rule.label] = N / d;
    }

    return result;
  }
}
