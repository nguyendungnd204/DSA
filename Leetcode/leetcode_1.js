var twoSum = function(nums, target) {
    const map = new Map()

    for(let i = 0; i< nums.length; i++){
        let num = target - nums[i]
        if(map.has(num)){
            return [ map.get(num), i];
        }
        map.set( nums[i], i);
    }

    return [];
 
};

console.log(twoSum([3,3],6))