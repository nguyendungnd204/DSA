function checkVowels(char){
    let set = new Set(['a','e','i','o','u','A','E','I','O','U']);
    if(set.has(char))
    return true;

    return false;
}

console.log(checkVowels('a'))