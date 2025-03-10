import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const linkedListExample = `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  remove(value) {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }
}`

const treeExample = `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }
}`

export default function DataStructuresPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Data Structures Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Essential data structures concepts and implementations with detailed examples.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Linked Lists</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation:</h3>
            <CodeBlock code={linkedListExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Operations:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Insertion: O(1) at head, O(n) at tail</li>
              <li>Deletion: O(1) at head, O(n) at tail</li>
              <li>Search: O(n)</li>
              <li>Space Complexity: O(n)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Binary Search Trees</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A binary search tree is a hierarchical data structure where each node has at most two children, with all left descendants less than the current node and all right descendants greater.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation:</h3>
            <CodeBlock code={treeExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Time Complexities:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Insertion: O(log n) average, O(n) worst</li>
              <li>Search: O(log n) average, O(n) worst</li>
              <li>Deletion: O(log n) average, O(n) worst</li>
              <li>Space: O(n)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}