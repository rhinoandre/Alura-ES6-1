class NegotiationView {

  constructor (element) {
    this._element = element;
  }

  update (negotiations) {
    this._element.innerHTML = this._template(negotiations);
  }

  _template (negotiations) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        ${
          negotiations.map(neg => `
            <tr>
              <td>${DateHelper.dateToString(neg.date)}</td>
              <td>${neg.quantity}</td>
              <td>${neg.value}</td>
              <td>${neg.amount}</td>
            </tr>
          `)
        }

        </tbody>
        
        <tfoot>
          <tr>
            <td colspan="3"></td>
            <td>${negotiations.reduce((total, neg) => total + neg.amount, 0)}</td>
          </tr>
        </tfoot>
    </table> `
  }
}