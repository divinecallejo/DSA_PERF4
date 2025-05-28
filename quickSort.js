//array fuction of a quickSort
function quickSort(arr) {
    // Base case: if array has one or zero elements, it is sorted already
    if (arr.length <= 1) {
        return arr;
    }

込み

const pivot = arr[arr.length - 1]; // Select the last element to use as the pivot
const left = []; // Values less than the pivot
    const right = []; // Values greater than the pivot

&nbsp;

&nbsp;

    // Divide the array into left and right subarrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot)
left.push(arr[i]); // Push to left if smaller than pivot
        } else {
            right.push(arr[i]); // Push to right if larger or equal to pivot
        }
    }
&nbsp;

&nbsp;

// Recursively sort left and right subarrays and merge with the pivot
return [.quickSort(left), pivot, .quickSort(right)];

 Destruction


// Example usage
const unsortedArray = [10, 7, 8, 9, 1, 5];
console.log(quickSort(unsortedArray)); // Output: [1, 5, 7, 8, 9, 10]
