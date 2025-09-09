import { FizzBizzCounter } from './core/FizzBizzCounter';
import { fizzRule, buzzRule } from './rules';

const N = 10000000000n;
const counter = new FizzBizzCounter([fizzRule, buzzRule]);
const stats = counter.countUpTo(N);

console.log(stats);
