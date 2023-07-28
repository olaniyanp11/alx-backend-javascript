export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  toString() {
    return `{ _name: ${this.__name}, _code: ${this.__code} }`;
  }
}
