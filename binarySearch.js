function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

console.log(binarySearch([3, 8, 15, 21, 34, 47, 56, 72, 89], 72));
console.log(binarySearch([3, 8, 15, 21, 34, 47, 56, 72, 89], 50));

console.log(binarySearch([3, 8, 15, 21, 34, 47, 56, 72, 89], 3));
console.log(binarySearch([3, 8, 15, 21, 34, 47, 56, 72, 89], 89));
console.log(binarySearch([3, 8, 15, 21, 34, 47, 56, 72, 89], 15));
