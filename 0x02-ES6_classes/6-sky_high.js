import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.__floors = floors;
  }

  get floors() {
    return this.__floors;
  }

  set floors(value) {
    this.__floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.__floors} floors`;
  }
}
