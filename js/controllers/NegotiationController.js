class NegotiationController {
  constructor () {
    let $ = document.querySelector.bind(document);
    this._inputQuantity = $('#quantidade');
    this._inputValue = $('#valor');
    this._inputDate = $('#data');
    this._negotiations = new NegotiationList();
  }

  addNegotiation (event) {
    event.preventDefault();

    this._negotiations.addNegotiation(this._createNegotiation());
    this._resetForm();

    console.log(this._negotiations.negotiations);
  }
  
  _createNegotiation () {
    return new Negotiation(
        DateHelper.stringToDate(this._inputDate.value),
        this._inputQuantity.value,
        this._inputValue.value
      );
  }

  _resetForm () {
    this._inputDate.value = '';
    this._inputQuantity.value = 1;
    this._inputValue.value = 0;
  }
}