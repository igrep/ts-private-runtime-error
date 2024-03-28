class Example {
  #privA: string;
  #privB = this.useA();
  constructor(privA: string) {
    this.#privA = privA;
  }

  useA(): string {
    return this.#privA.toUpperCase();
  }

  get a(): string {
    return this.#privA;
  }

  get b(): string {
    return this.#privB;
  }
}

console.log(new Example('example').b);
