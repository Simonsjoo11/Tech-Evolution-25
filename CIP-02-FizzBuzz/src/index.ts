import { FizzBizzCounter } from './core/FizzBizzCounter';
import { StdinInputProvider } from './inputs/StdinInputProvider';
import { fizzRule, buzzRule } from './rules';

(async () => {
  try {
    const input = new StdinInputProvider();
    const N = await input.getInput();

    const counter = new FizzBizzCounter([fizzRule, buzzRule]);
    const stats = counter.countUpTo(N);

    for (const [label, count] of Object.entries(stats)) {
      console.log(`${label}: ${count.toString()} times`);
    }
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }
})();
