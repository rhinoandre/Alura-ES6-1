class DateHelper {

  constructor () {
    throw new Error('Class must not be instantiated')
  }

  static stringToDate (stringDate) {
    if(!/\d{4}-\d{2}-\d{2}/.test(stringDate))
      throw new Error('The format must be yyyy-mm-dd');

    return new Date(
        ...stringDate
            .split('-')
            .map((pos, i) => pos - i % 2)
      );
  }

  static dateToString(date) {
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }

}