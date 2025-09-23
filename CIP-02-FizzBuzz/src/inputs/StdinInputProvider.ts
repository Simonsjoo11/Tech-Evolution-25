import { InputProvider } from './InputProvider';
import { validateInput } from './Validators';
import readline from 'readline';

export class StdinInputProvider implements InputProvider {
  async getInput(): Promise<bigint> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const question = (query: string) =>
      new Promise<string>(resolve => rl.question(query, resolve));

    try {
      const raw = await question('Enter a positive integer N (1 ≤ N ≤ 1e15): ');
      return validateInput(raw);
    } catch (error) {
      console.error('Invalid input. Please try again.');
      return this.getInput();
    } finally {
      rl.close();
    }
  }
}
