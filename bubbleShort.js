//array function for bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    // Outer loop for every element in the array
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for comparing the adjacent elements
for (let j = 0; j < n - 1 - i; j++) {
            // If the current element is greater than the next element, swap them
            if (arr[j] > arr[j + 1]) {
// Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
return arr; // Return the sorted array
}

&nbsp;

&nbsp;

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(unsortedArray)); // Output: [11, 12, 22, 25, 34, 64, 90]
