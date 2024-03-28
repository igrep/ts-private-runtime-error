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

console.log(new Example2('example2').b);
