//array function for insertionsort
function insertionSort(arr) {
    let n = arr.length;
    // Outer loop for every element in the array beginning from the second element
    for (let i = 1; i < n; i++) {
        let key = arr[i]; // The element to be inserted
let j = i - 1;
        // Shift elements of arr[0.i-1] which are larger than key to position just ahead
        while (j >= 0 && arr[j] > key)
arr[j + 1] = arr[j]; // Shift element to the right
            j--;
        }
        arr[j + 1] = key; // Insert the key at the correct position
    }
return arr; // Return the sorted array
}

 

// Example usage
const unsortedArray = [12, 11, 13, 5, 6];
console.log(insertionSort(unsortedArray)); // Output: [5, 6, 11, 12, 13]
