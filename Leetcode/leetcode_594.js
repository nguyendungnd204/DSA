var findLHS = function(nums) {
    const map = new Map();

    for(let x of nums){
        map.set(x, (map.get(x) || 0)+1);
    }
    let maxLen = 0;

    for (let [key, val] of map){
        if(map.has(key+1))
            maxLen = Math.max(maxLen, val + map.get(key+1));
    }

    return maxLen
};

console.log(findLHS([1,3,2,2,5,2,3,7]));