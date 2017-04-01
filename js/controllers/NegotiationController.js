class NegotiationController {
  constructor () {
    let $ = document.querySelector.bind(document);
    this._inputQuantity = $('#quantidade');
    this._inputValue = $('#valor');
    this._inputDate = $('#data');
  }

  addNegotiation (event) {
    event.preventDefault();
    var date = new Date(
      ...this._inputDate.value
          .split('-')
          .map((pos, i) => pos - i % 2)
    );
    let negotiation = new Negotiation(
      date,
      this._inputQuantity.value,
      this._inputValue.value);

      console.log(negotiation);
  }

  resetForm () {
    this._inputData.value = '';
    this._inputQuantity.value = 1;
    this._inputValue.value = 0;
  }
}