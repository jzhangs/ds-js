'use strict';

function Node(key, value) {
  this.key = key;
  this.value = value;
  this.left = this.right = null;
}

class BST {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  insert(key, value) {
    this.root = this._insert(this.root, key, value);
  }

  _insert(node, key, value) {
    // console.info('_insert', node);
    if (node === null) {
      this.count++;
      return new Node(key, value);
    }
    if (key === node.key) {
      node.value = value;
    } else if (key < node.key) {
      node.left = this._insert(node.left, key, value);
    } else {
      node.right = this._insert(node.right, key, value);
    }
    return node;
  }

  contain(key) {
    return this._contain(this.root, key);
  }

  _contain(node, key) {
    if (node === null) {
      return false;
    }
    if (key === node.key) {
      return true;
    } if (key < node.key) {
      return this._contain(node.left, key);
    } else {
      return this._contain(node.right, key);
    }
  }

  search(key) {
    return this._search(this.root, key);
  }

  _search(node, key) {
    if (node === null) {
      return null;
    }
    if (key === node.key) {
      return node;  // may return 'value' if we have pointer.
    } if (key < node.key) {
      return this._search(node.left, key);
    } else {
      return this._search(node.right, key);
    }
  }

  preOrder(visit) {
    this._preOrder(this.root, visit);
  }

  _preOrder(node, visit) {
    if (node) {
      visit(node.key);
      this._preOrder(node.left, visit);
      this._preOrder(node.right, visit);
    }
  }

  inOrder(visit) {
    this._inOrder(this.root, visit);
  }

  _inOrder(node, visit) {
    if (node) {
      this._inOrder(node.left, visit);
      visit(node.key);
      this._inOrder(node.right, visit);
    }
  }

  postOrder(visit) {
    this._postOrder(this.root, visit);
  }

  _postOrder(node, visit) {
    if (node) {
      this._postOrder(node.left, visit);
      this._postOrder(node.right, visit);
      visit(node.key);
    }
  }

  levelOrder(visit) {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      visit(node.key);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  // destroy() {
  //   this._destroy(this.root);
  // }

  // _destroy(node) {
  //   if (node) {
  //     this._destroy(node.left);
  //     this._destroy(node.right);
  //     node = null;
  //     this.count--;
  //   }
  // }

}

module.exports = BST ;
