// return true if the array is sorted either
// ascending, or descending.
// [] => true
// [42] => true
// [39, 42] => true
// [42, 39] => true
// [1, 2, 3, 4, 5] => true
// [5, 4, 3, 2, 1] => true
// [1, 5, 2] => false

//---------------------------------------------------------------//

// "use strict"
// const isSorted = (arr) => {
//    let ArrangementOrder;
//    let answer = true;
  
//     if (array.length === 0 || array.length === 1) {
//       console.log(answer);
//       return;
//     }
  
//     if (array[0] < array[1]) ArrangementOrder = "ascending";
//     if (array[0] > array[1]) ArrangementOrder = "descending";
  
//     for (let i = 0; i < array.length - 1; i++) {
//       if (ArrangementOrder === "ascending" && array[i] < array[i + 1]) "";
//       else if (ArrangementOrder === "descending" && array[i] > array[i + 1]) "";
//       else {
//         answer = false;
//         break;
//       }
//     }
  
//   console.log(answer);
// };
  
// isSorted([]);
// isSorted([42]);
// isSorted([39, 42]);
// isSorted([42, 39]);
// isSorted([1, 2, 3, 4, 5]);
// isSorted([5, 4, 3, 2, 1]);
// isSorted([1, 5, 2]);

//---------------------------------------------------------------//

function isSorted(array) {
    let result;
    if (
      array.every(function (value, i) {
        return i === 0 || value >= array[i - 1];
      })
    ) {
      result = true;
    } else if (
      array.every(function (value, i) {
        return i === 0 || value <= array[i - 1];
      })
    ) {
      result = true;
    } else {
      result = false;
    }
    return result;
}
  
console.log(isSorted([]));
console.log(isSorted([42]));
console.log(isSorted([39, 42]));
console.log(isSorted([42, 39]));
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([5, 4, 3, 2, 1]));
console.log(isSorted([1, 5, 2]));
console.log(isSorted([1, 2, 3, 6, 8, 5, 1, 6]));
