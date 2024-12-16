import { Node } from './Node.js';

export function LinkedList() {
  let headNode = new Node();

  function append(value) {
    // adds a new node containing value to the end of the list
    let current = headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = new Node(value);
  }

  function prepend(value) {
    // adds a new node containing value to the start of the list
    let newNode = new Node(value, headNode.nextNode);
    headNode.nextNode = newNode;
  }

  function size() {
    // returns the total number of nodes in the list
    let current = headNode;
    let total = 0;
    while (current.nextNode !== null) {
      total += 1;
      current = current.nextNode;
    }
    return total;
  }

  function head() {
    // returns the first node in the list
    return headNode.nextNode;
  }

  function tail() {
    // returns the last node in the list
    let current = headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  function at(index) {
    // returns the node at the given index
    let tempIndex = 0;
    let current = headNode.nextNode;
    while (tempIndex < index && current !== null) {
      current = current.nextNode;
      tempIndex++;
    }
    return current;
  }

  function pop() {
    // removes the last element from the list
    let prev;
    let current = headNode;
    while (current.nextNode !== null) {
      prev = current;
      current = current.nextNode;
    }

    if (current !== headNode) {
      prev.nextNode = null;
    }
  }

  function contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false.
    let current = headNode;
    while (current.nextNode !== null) {
      if (current.nextNode.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  function find(value) {
    // returns the index of the node containing value, or null if not found.
    let tempIndex = 0;
    let current = headNode.nextNode;
    while (current !== null) {
      if (current.value === value) return tempIndex;
      current = current.nextNode;
      tempIndex++;
    }
    return null;
  }

  function toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let current = headNode;
    let output = '';
    while (current.nextNode !== null) {
      output += `( ${current.nextNode.value} ) -> `;
      current = current.nextNode;
    }

    output += 'null';
    return output;
  }

  function insertAt(value, index) {
    // inserts a new node with the provided value at the given index
    let tempIndex = 0;
    let prev = headNode;
    let current = headNode.nextNode;
    while (tempIndex < index && current !== null) {
      prev = current;
      current = current.nextNode;
      tempIndex++;
    }

    let newNode = new Node(value, current);
    prev.nextNode = newNode;
  }

  function removeAt(index) {
    // removes the node at the given index
    let tempIndex = 0;
    let prev = headNode;
    let current = headNode.nextNode;
    while (tempIndex < index && current !== null) {
      prev = current;
      current = current.nextNode;
      tempIndex++;
    }

    try {
      prev.nextNode = current.nextNode;
    } catch (e) {
      if (e instanceof TypeError) {
        return;
      }
    }
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
