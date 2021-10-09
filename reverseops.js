// Add any extra import statements you may need here


class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

// Add any helper functions you may need here
//my soln:

function reverse(head) {
    let dummyHead = new Node(-1);
    let prev = dummyHead;
    while (head != null) {
      // 1. skip all odd num
      while (head != null && head.data % 2 == 1) {
        prev.next = head;
        prev = prev.next;
        head = head.next;
      }
      // 2. reverse
      let tail = null;
      while (head != null && head.data % 2 == 0) {
        let curr = head;
        head = head.next;
        if (tail == null) {
          tail = curr;
        }
        curr.next = prev.next;
        prev.next = curr;
      }
      // 3. update prev 
      prev = tail;
      prev.next = null;
    }
    return dummyHead.next;
  }










//Facebook's test cases:


var test_case_number = 1;

function printLinkedList(head) {
  var out = '[';
  while (head != null) {
    out += head.data;
    head = head.next;
    if (head != null) {
      out += ' ';
    }
  }
  out += ']';
  return out;
}

function check(expectedHead, outputHead) {
  var result = true;
  var tempExpectedHead = expectedHead;
  var tempOutputHead = outputHead;
  while (expectedHead != null && outputHead != null) {
    result &= (expectedHead.data == outputHead.data);
    expectedHead = expectedHead.next;
    outputHead = outputHead.next;
  }
  if (!(expectedHead == null && outputHead == null)) result = false;

  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  } else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printLinkedList(tempExpectedHead);
    out += ' Your output: ';
    out += printLinkedList(tempOutputHead);
    console.log(out);
  }
  test_case_number++;
}

function createLinkedList(arr) {
  var head = null;
  var tempHead = head;
  for (var v of arr) {
    if (head == null) {
      head = new Node(v);
      tempHead = head;
    } else {
      head.next = new Node(v);
      head = head.next;
    }
  }
  return tempHead;
}

var head_1 = createLinkedList([1, 2, 8, 9, 12, 16]);
var expected_1 = createLinkedList([1, 8, 2, 9, 16, 12]);
var output_1 = reverse(head_1);
check(expected_1, output_1);

var head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12]);
var expected_2 = createLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6]);
var output_2 = reverse(head_2);
check(expected_2, output_2);


