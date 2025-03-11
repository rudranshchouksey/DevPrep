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

const dynamicProgrammingExample = `// Fibonacci with memoization
function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// 0-1 Knapsack Problem
function knapsack(values, weights, capacity) {
  const n = values.length;
  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i-1] <= w) {
        dp[i][w] = Math.max(
          values[i-1] + dp[i-1][w-weights[i-1]],
          dp[i-1][w]
        );
      } else {
        dp[i][w] = dp[i-1][w];
      }
    }
  }
  
  return dp[n][capacity];
}`

export default function AlgorithmsNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Algorithms Notes</h1>
        <p className="text-muted-foreground mt-2">
          Essential algorithms, their implementations, and complexity analysis.
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
              <li>Space Complexity: O(n) for merge sort</li>
              <li>In-place vs. out-of-place sorting</li>
              <li>Stability considerations</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dynamic Programming</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Dynamic programming is an algorithmic paradigm that solves complex problems by breaking them down into simpler subproblems.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation Examples:</h3>
            <CodeBlock code={dynamicProgrammingExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Concepts:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Optimal substructure</li>
              <li>Overlapping subproblems</li>
              <li>Memoization technique</li>
              <li>Tabulation method</li>
              <li>Space-time tradeoffs</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}