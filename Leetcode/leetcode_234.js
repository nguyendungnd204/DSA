var isPalindrome = function(head) {
    if(!head || !head.next) return true;
   let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = reverse(slow);
    let firstHalf = head;

  while(secondHalf){
    if(firstHalf.val !== secondHalf.val){
        return false;
    }
    secondHalf = secondHalf.next;
    firstHalf = firstHalf.next;
  }
  return true;
};


function reverse(head){
    let left = null;
    while(head != null){
        tmp = head.next;
        head.next = left;
        left = head;
        head = tmp;
    }

    return left;
}