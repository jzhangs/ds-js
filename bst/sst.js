'use strict';

function Node(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
}

class SST {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  insert(key, value) {
    let node = this.head;
    while (node) {
      if (node.key === key) {
        node.value = value;
        return;
      }
      node = node.next;
    }

    const newNode = new Node(key, value);
    newNode.next = this.head;
    this.head = newNode;
    this.count++;
  }

  contain(key) {
    let node = this.head;
    while (node) {
      if (node.key === key) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  search(key) {
    let node = this.head;
    while (node) {
      if (node.key === key) {
        return node;
      }
      node = node.next;
    }
    return null;
  }
}

module.exports = SST ;
