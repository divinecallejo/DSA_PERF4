//array function of mergesort
function mergeSort(arr) {
    // Base case: if the array has one or zero elements, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }
&nbsp;
&nbsp;

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
const left = mergeSort(arr.slice(0, mid)); // Sort the left half
    const right = mergeSort(arr.slice(mid)); // Sort the right half
&nbsp;
&nbsp;

    // Merge the sorted halves
    return merge(left, right);
}
&nbsp;
&nbsp;

function merge(left, right) {
    const result = [];
    let i = 0; // Pointer for left array
let j = 0; // Pointer for right array
&nbsp;
&nbsp;

    // Compare elements from both arrays and merge them in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
&nbsp;
&nbsp;

// Concatenate any remaining elements from both arrays
    return result.concat(left.slice(i)).concat(right.slice(j));
}
&nbsp;
&nbsp;

// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(unsortedArray)); // Output: [3, 9, 10, 27, 38, 43, 82]
