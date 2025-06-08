var missingNumber = function(nums) {
    let map = new Map();
    nums.sort((a, b) => a - b);

    for (let i = 0; i< nums.length; i++){
        map.set(i, nums[i]);
    }

     for (let i = 0; i< nums.length; i++){
        if(map.get(i) != i)
            return i;
    }
    return nums.length;
};