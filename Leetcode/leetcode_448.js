var findDisappearedNumbers = function(nums) {

    const set = new Set();
    const res = [];

    for (let x of nums){
        set.add(x);
    }

    for (let i = 1; i <= nums.length ; i++){
        if(!set.has(i)){
            res.push(i);
        }
    }

    return res;
}