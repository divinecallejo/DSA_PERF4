//array function of a heapSort
function heapSort(arr) {
    const n = arr.length;
&nbsp;
&nbsp;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
&nbsp;
&nbsp;

    // One by one extract elements from the heap
for (let i = n - 1; i > 0; i--) {
        // Rotate the current root (maximum) to the end
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap
        // Call heapify on the shrunk heap
heapify(arr, i, 0);
}
return arr; // Return the sorted array
}
&nbsp;
&nbsp;

// Function to keep the heap property
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left child index
const right = 2 * i + 2; // right child index

	

	

    // If left child is bigger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

	

	

    // If right child is bigger than largest so far
if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

&nbsp;

&nbsp;

    // If largest is not root, swap and continue heapifying
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
heapify(arr, n, largest); // Recursively heapify the impacted sub-tree
}
</code>
&nbsp;
&nbsp;

// Utilization
let unsortedArray = [12, 11, 13, 5, 6, 7];
console.log(heapSort(unsortedArray)); // Output: [5, 6, 7, 11, 12, 13]
