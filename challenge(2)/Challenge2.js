let nums = [3, 2, 3];
let arr = [];
let count = 0;
let time = nums.length / 2;
let output = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > count) {
        count = nums[i];
    }
}
for (let j = 0; j < count; j++) {
    arr[j] = 0;
}
console.log(arr)
for (let m = 0; m < nums.length; m++) {
    arr[nums[m] - 1]++;
}
for (let k = 0; k < nums.length; k++) {
    if (time < arr[nums[k] - 1]) {
        output = nums[k];
    }
}
console.log(output)