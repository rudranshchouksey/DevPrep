import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

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

const graphExample = `class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }
  
  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }
  
  bfs(start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    
    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);
      
      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
  
  dfs(start) {
    const visited = new Set();
    
    const traverse = (vertex) => {
      visited.add(vertex);
      console.log(vertex);
      
      for (const neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          traverse(neighbor);
        }
      }
    };
    
    traverse(start);
  }
}`

export default function DataStructuresNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Data Structures Notes</h1>
        <p className="text-muted-foreground mt-2">
          Comprehensive guide to fundamental data structures and their implementations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Binary Search Trees</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Binary Search Trees (BST) are hierarchical data structures that maintain sorted data and enable efficient searching, insertion, and deletion operations.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation:</h3>
            <CodeBlock code={treeExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Operations:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Insertion: O(log n) average case</li>
              <li>Search: O(log n) average case</li>
              <li>Deletion: O(log n) average case</li>
              <li>Tree traversal methods</li>
              <li>Self-balancing variations</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Graphs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Graphs are versatile data structures that represent relationships between objects, widely used in social networks, routing algorithms, and more.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation:</h3>
            <CodeBlock code={graphExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Concepts:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Adjacency list representation</li>
              <li>Breadth-first search (BFS)</li>
              <li>Depth-first search (DFS)</li>
              <li>Shortest path algorithms</li>
              <li>Graph traversal techniques</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}