'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const cmp = compareFunction ?? ((a, b) => a.toString() >= b.toString());

    for (let i = 0; i < this.length; i++) {
      for (let k = i + 1; k < this.length; k++) {
        if (cmp(this[i], this[k]) > 0) {
          const temp = this[i];

          this[i] = this[k];
          this[k] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
