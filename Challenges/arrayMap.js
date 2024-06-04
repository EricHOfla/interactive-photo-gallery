function hasContiguousSubarray(arr, target) {
    let currentSum = 0;
    const sumSet = new Set();
    sumSet.add(0);
    for (let num of arr) {
        currentSum += num;
        if (sumSet.has(currentSum - target)) {
            return true;
        }
        sumSet.add(currentSum);
    }
    return false;
}
