class ListNode0<T> {
  next?: ListNode<T>;

  constructor(public value: T) {}
}

class LinkedList0<T> {
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;

  add(value: T) {
    const node = new ListNode(value);
    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  getNumberOfElements() {
    return this.length;
  }

  print() {
    let current = this.root;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const numberList0 = new LinkedList<number>();

numberList.add(10);
numberList.add(5);
numberList.add(30);

console.log(numberList.getNumberOfElements());
numberList.print();
// const nameList = new LinkedList<string>();
