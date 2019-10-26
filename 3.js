function divideAndSort(nums) {
    let arr = [];
    let arr2 = []
    nums = String(nums);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== "0") {
            arr.push(nums[i]);
        }
        else {
            arr.sort();
            arr2 = arr2.concat(arr);
            arr = [];
            continue;
        }
    }
    arr2 = arr2.concat(arr)
    return Number(arr2.join(""));
}