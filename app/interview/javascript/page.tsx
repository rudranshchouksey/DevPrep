import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const closuresExample = `function createCounter() {
  let count = 0;
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2`

const promiseExample = `const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Usage with async/await
async function getUserDetails() {
  try {
    const user = await fetchUserData(123);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}`

export default function JavaScriptInterviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">JavaScript Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Essential JavaScript concepts and common interview questions with detailed explanations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Explain Closures in JavaScript</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A closure is the combination of a function and the lexical environment within which that function was declared. 
            This environment consists of any local variables that were in-scope at the time the closure was created.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Practical Example:</h3>
            <CodeBlock code={closuresExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Points:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Closures maintain access to outer function's scope</li>
              <li>Used for data privacy and encapsulation</li>
              <li>Common in module patterns and factory functions</li>
              <li>Help create private variables and methods</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Promises and Async/Await</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Promises provide a way to handle asynchronous operations in JavaScript. Async/await is syntactic sugar that makes 
            working with promises more readable and maintainable.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Example Implementation:</h3>
            <CodeBlock code={promiseExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Promise States:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Pending: Initial state, neither fulfilled nor rejected</li>
              <li>Fulfilled: Operation completed successfully</li>
              <li>Rejected: Operation failed</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}