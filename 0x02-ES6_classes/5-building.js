export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error(
        'Class extending Building must implement evacuationWarningMessage',
      );
    }
    this.__sqft = sqft;
  }

  get sqft() {
    return this.__sqft;
  }
}
