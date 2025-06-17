var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 0;

    for (let x of nums){
        if(count === 0){
            candidate = x;
        }

        if(x === candidate){
            count++;
        }
        else{
            count--;
        }
    }
    return candidate;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))