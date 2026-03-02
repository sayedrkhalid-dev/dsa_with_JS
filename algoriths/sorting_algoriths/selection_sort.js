/**
 * Algorithm: Selection Sort
 * Category: Comparison Sort
 * Stable: No
 * In-place: Yes
 * Adaptive: No
 * Time Complexity:
 *   - Best: O(n²)
 *   - Average: O(n²)
 *   - Worst: O(n²)
 * Space Complexity: O(1)
 */

const selectionSort = (arr) => {
  if (!Array.isArray(arr)) throw new TypeError("You provide an invalid array");

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort([20, 10, 40, 50, 30]));
