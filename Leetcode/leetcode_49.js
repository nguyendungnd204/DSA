function groupAnagrams(strs) {
    if (strs.length === 0) {
        return [];
    }

    const map = new Map();

    for (let str of strs) {
        let count = Array(26).fill(0);

        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let key = count.join('#');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }
    return Array.from(map.values());
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));