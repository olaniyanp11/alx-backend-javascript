/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    this.__sqft = sqft;
    if (
      this.constructor !== Building
      && this.evacuationWarningMessage === undefined
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    return this.__sqft;
  }

  set sqft(sqft) {
    this.__sqft = sqft;
  }
}
