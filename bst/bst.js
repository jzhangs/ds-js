'use strict';

const assert = require('assert');

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
    function _contain(node, key) {
      if (node === null) {
        return false;
      }
      if (key === node.key) {
        return true;
      } if (key < node.key) {
        return _contain(node.left, key);
      } else {
        return _contain(node.right, key);
      }
    }
    return _contain(this.root, key);
  }

  search(key) {
    function _search(node, key) {
      if (node === null) {
        return null;
      }
      if (key === node.key) {
        return node;  // may return 'value' if we have pointer.
      } if (key < node.key) {
        return _search(node.left, key);
      } else {
        return _search(node.right, key);
      }
    }
    return _search(this.root, key);
  }

  preOrder(visit) {
    function _preOrder(node, visit) {
      if (node) {
        visit(node.key);
        _preOrder(node.left, visit);
        _preOrder(node.right, visit);
      }
    }
    _preOrder(this.root, visit);
  }

  inOrder(visit) {
    function _inOrder(node, visit) {
      if (node) {
        _inOrder(node.left, visit);
        visit(node.key);
        _inOrder(node.right, visit);
      }
    }
    _inOrder(this.root, visit);
  }

  postOrder(visit) {
    function _postOrder(node, visit) {
      if (node) {
        _postOrder(node.left, visit);
        _postOrder(node.right, visit);
        visit(node.key);
      }
    }
    _postOrder(this.root, visit);
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

  min() {
    assert(this.count !== 0);
    return this._min(this.root).key;
  }

  _min(node) {
    if (!node.left) {
      return node;
    }
    return this._min(node.left);
  }

  max() {
    assert(this.count !== 0);
    return this._max(this.root).key;
  }

  _max(node) {
    if (!node.right) {
      return node;
    }
    return this._max(node.right);
  }

  removeMin() {
    if (this.root) {
      this.root = this._removeMin(this.root);
    }
  }

  _removeMin(node) {
    if (!node.left) {
      let right = node.right;
      // node = null;
      this.count--;
      return right;
    }
    node.left = this._removeMin(node.left);
    return node;
  }

  removeMax() {
    if (this.root) {
      this.root = this._removeMax(this.root);
    }
  }

  _removeMax(node) {
    if (!node.right) {
      let left = node.left;
      // node = null;
      this.count--;
      return left;
    }
    node.right = this._removeMax(node.right);
    return node;
  }

  remove(key) {
    this.root = this._remove(this.root, key);
  }

  _remove(node, key) {
    if (!node) {
      return null;
    }

    if (key < node.key) {
      node.left = this._remove(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this._remove(node.right, key);
      return node;
    } else {  // key === node.key
      if (!node.left) {
        const right = node.right;
        // node = null;
        this.count--;
        return right;
      }

      if (!node.right) {
        const left = node.left;
        // node = null;
        this.count--;
        return left;
      }

      // node.left !== null and node.right !== null
      const successor = this._min(node.right);
      successor.right = this._removeMin(node.right); // this.count-- in removeMin
      successor.left = node.left;
      return successor;
    }
  }

  floor(key) {
    if (this.count === 0 || key < this.min()) {
      return null;
    }
    return this._floor(this.root, key).key;
  }

  _floor(node, key) {
    if (!node) {
      return null;
    }
    if (node.key === key) {
      return node;
    }
    if (node.key > key) {
      return this._floor(node.left, key);
    }

    const _node = this._floor(node.right, key);
    return (_node ? _node : node);
  }

  ceil(key) {
    if (this.count === 0 || key > this.max()) {
      return null;
    }
    return this._ceil(this.root, key).key;
  }

  _ceil(node, key) {
    if (!node) {
      return null;
    }
    if (node.key === key) {
      return node;
    }
    if (node.key < key) {
      return this._ceil(node.right, key);
    }

    const _node = this._ceil(node.left, key);
    return (_node ? _node : node);
  }

  predecessor(key) {
    const node = this.search(key);
    if (!node) {
      return null;
    }

    if (node.left) {
      return this._max(node.left).key;
    }

    const pre = this.predecessorFromAncestor(this.root, key);
    return pre ? pre.key : null;
  }

  predecessorFromAncestor(node, key) {
    if (node.key === key) {
      return null;
    }
    if (key < node.key) {
      return this.predecessorFromAncestor(node.left, key);
    } else {
      assert(key > node.key);
      const _node = this.predecessorFromAncestor(node.right, key);
      return _node ? _node : node;
    }
  }

  successor(key) {
    const node = this.search(key);
    if (!node) {
      return null;
    }

    if (node.right) {
      return this._min(node.right).key;
    }

    const suc = this.successorFromAncestor(this.root, key);
    return suc ? suc.key : null;
  }

  successorFromAncestor(node, key) {
    if (node.key === key) {
      return null;
    }

    if (key > node.key) {
      return this.successorFromAncestor(node.right, key);
    } else {
      assert(key < node.key);
      const _node = this.successorFromAncestor(node.left, key);
      return _node ? _node : node;
    }
  }
}

module.exports = BST;
