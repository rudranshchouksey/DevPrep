import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const sortingExample = `// Quick Sort Implementation
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Merge Sort Implementation
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}`

const searchingExample = `// Binary Search Implementation
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// Graph Search (BFS) Implementation
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const vertex = queue.shift();
    console.log(vertex);

    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`

export default function AlgorithmsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Algorithms Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Common algorithms, their implementations, and complexity analysis.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sorting Algorithms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Sorting algorithms are fundamental to computer science and are often used to optimize other algorithms.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation:</h3>
            <CodeBlock code={sortingExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Complexity Analysis:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Quick Sort: O(n log n) average, O(n²) worst</li>
              <li>Merge Sort: O(n log n) always</li>
              <li>Space Complexity: O(n) for merge sort, O(log n) for quick sort</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Searching Algorithms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Efficient searching algorithms are crucial for finding elements in large datasets.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation:</h3>
            <CodeBlock code={searchingExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Time Complexities:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Binary Search: O(log n)</li>
              <li>BFS: O(V + E) where V is vertices and E is edges</li>
              <li>Linear Search: O(n)</li>
              <li>DFS: O(V + E)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}