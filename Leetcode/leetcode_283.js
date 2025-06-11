var moveZeroes = function(nums) {
     let i = 0;
    for (let j = 0; j< nums.length; j++){
        if(nums[j] != 0){
            tmp = nums[j];
            nums[j] = nums[i];
            nums[i] = tmp;
            i++;
        }
    }
    return nums
};