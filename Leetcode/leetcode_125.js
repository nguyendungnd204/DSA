var isPalindrome = function(s) {

  if(s.length = "")
    return true;

  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 

  let right = str.length - 1;
  let left = 0;
    while(left < right){
        if(str[left] != str[right])
            return false;

        left++;
        right--;
    }

    return true;

};

console.log(isPalindrome("A man, a plan, a canal: Panama"))