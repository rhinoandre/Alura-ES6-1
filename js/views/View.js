class View {
  constructor (element) {
    this._element = element;
  }

  update (model) {
    this._element.innerHTML = this.template(model);
  }

  template (model) {
    throw "This method must be replaced";
  }
}