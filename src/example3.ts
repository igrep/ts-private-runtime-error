class Example3 {
  b = this.useA();
  constructor(public a: string) {
  }

  useA(): string {
    return this.a.toUpperCase();
  }
}

console.log(new Example3('example3').b);
