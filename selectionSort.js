//array function of a selection sort
function selectionSort(arr) {
    const n = arr.length;
    // Outer loop for each element in the array
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Assume the first element is the minimum
// Inner loop to get the index of the minimum element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex])imir
minIndex = j; // If a smaller element is found, update minIndex
            }
        }
        // Replace the minimum element found by the first element of the unsorted portion
if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr; // Return sorted array
}
&nbsp;
&nbsp;

// Example usage
const unsortedArray = [64, 25, 12, 22, 11];
console.log(selectionSort(unsortedArray)); // Output: [11, 12, 22, 25, 64]
