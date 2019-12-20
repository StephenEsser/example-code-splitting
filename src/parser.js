class Parser {
  /**
  * Parses the url parameters into an object.
  * @return {Object} - A keyed object map for parameter values.
  */
  static parse() {
    const vars = {};

    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
      vars[key] = value;
    });

    return vars;
  }
}

export default Parser;
