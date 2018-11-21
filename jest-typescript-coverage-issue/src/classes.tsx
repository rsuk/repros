class Base {
  public counter: number = 0;
  increment() {
  
  }
}

class Derived extends Base {
  constructor(public anotherCount: number) {
    super();
  }
}

export { Base, Derived };