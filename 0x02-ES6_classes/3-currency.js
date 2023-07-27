export default class Currency {
  constructor(code, name) {
    this.__code = code;
    this.__name = name;
  }

  get name() {
    return this.__name;
  }

  set name(value) {
    this.__name = value;
  }

  get code() {
    return this.__code;
  }

  set code(value) {
    this.__code = value;
  }

  displayFullCurrency() {
    return `${this.__name} (${this.__code})`;
  }
}
