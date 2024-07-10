// Leetcode 2 - Add two numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let q = new ListNode();

  // The pointer we're gonna work with
  // to increment over the linked list
  let p = q;

  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = 0;
    sum += carry;
    carry = 0;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum > 9) {
      p.next = new ListNode(sum - 10);
      carry = 1;
    } else {
      p.next = new ListNode(sum);
    }
    p = p.next;
  }

  return q.next;
};
