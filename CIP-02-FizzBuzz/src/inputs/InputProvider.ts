export interface InputProvider {
  getInput(): Promise<bigint>;
}
