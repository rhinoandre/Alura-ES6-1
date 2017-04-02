class NegotiationController {
  constructor () {
    let $ = document.querySelector.bind(document);
    this._inputQuantity = $('#quantidade');
    this._inputValue = $('#valor');
    this._inputDate = $('#data');

    this._negotiations = new NegotiationList();
    this._negotiationView = new NegotiationView($('#negotiationView'));
    this._negotiationView.update(this._negotiations.negotiations);
    
    this._message = new Message();
    this._notificationView = new NotificationView($('#notificationView'));
    this._notificationView.update(this._message);
  }

  addNegotiation (event) {
    event.preventDefault();

    this._negotiations.addNegotiation(this._createNegotiation());
    this._negotiationView.update(this._negotiations.negotiations);

    this._message.text = 'Negotiation saved successfully';
    this._notificationView.update(this._message);

    this._resetForm();
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

    this._inputDate.focus();
  }
}