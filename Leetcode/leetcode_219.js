var containsNearbyDuplicate = function(nums, k) {
    let window = new Set();

    for(let i = 0; i< nums.length ; i++){
        if(window.has(nums[i]))
            return true;

        window.add(nums[i]);

        if(window.size > k){
            window.delete(nums[i-k]);
        }
    }
    return false;
};