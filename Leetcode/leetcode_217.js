var containsDuplicate = function(nums) {

    if(nums.length === 1){
        return false;
    }
    
    const set = new Set();

    for (let x in nums) {
        if(set.has(x))
            return true;

        set.add(x)
    }

    return false
};