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

class Example2 {
  a: string;
  b = this.useA();
  constructor(a: string) {
    this.a = a;
  }

  useA(): string {
    return this.a.toUpperCase();
  }
}

class Example3 {
  b = this.useA();
  constructor(public a: string) {
  }

  useA(): string {
    return this.a.toUpperCase();
  }
}

console.log(new Example3('example3').b);
console.log(new Example2('example2').b);
console.log(new Example('example').b);
