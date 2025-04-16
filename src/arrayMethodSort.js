'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const cmp =
      compareFunction ?? ((a, b) => String(a).localeCompare(String(b)));

    for (let i = 0; i < this.length; i++) {
      for (let k = i + 1; k < this.length; k++) {
        if (cmp(this[i], this[k]) > 0) {
          [this[i], this[k]] = [this[k], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
