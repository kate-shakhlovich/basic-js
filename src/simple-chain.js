const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length; 
  },

  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) { 
    if (isNaN(position) || position <= 0 || position > this.arr.length || position !== parseInt(position)) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const str = this.arr.map(el => {
      if (el === undefined) {
        return '( )';
      } 
      return `( ${el} )`; // '( ' + el + ' )';
    }).join("~~");
    this.arr = [];
    return str;
  }
};

module.exports = chainMaker;
