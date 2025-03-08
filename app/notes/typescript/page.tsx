import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const typeExample = `// Basic Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Union Types
type Status = "pending" | "completed" | "failed";
let taskStatus: Status = "pending";

// Interfaces
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  readonly createdAt: Date; // Read-only property
}`

const genericsExample = `// Generic Function
function identity<T>(arg: T): T {
  return arg;
}

// Generic Interface
interface Repository<T> {
  getById(id: string): Promise<T>;
  getAll(): Promise<T[]>;
  create(item: T): Promise<T>;
}

// Generic Class
class Queue<T> {
  private data: T[] = [];
  
  push(item: T) {
    this.data.push(item);
  }
  
  pop(): T | undefined {
    return this.data.shift();
  }
}`

export default function TypeScriptNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">TypeScript Notes</h1>
        <p className="text-muted-foreground mt-2">
          Essential TypeScript concepts, types, and advanced features.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Type System Fundamentals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            TypeScript extends JavaScript by adding static types. Understanding the type system is crucial for writing type-safe code.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Basic Types and Interfaces:</h3>
            <CodeBlock code={typeExample} language="typescript" />
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Static typing helps catch errors during development</li>
            <li>Type inference reduces the need for explicit type annotations</li>
            <li>Interfaces define contracts for object structures</li>
            <li>Union types allow variables to hold multiple types</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Generics enable you to write flexible, reusable code that works with multiple types while maintaining type safety.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Generic Examples:</h3>
            <CodeBlock code={genericsExample} language="typescript" />
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Generic functions work with any type while preserving type information</li>
            <li>Generic interfaces create flexible, type-safe contracts</li>
            <li>Generic classes enable type-safe instance methods and properties</li>
            <li>Type constraints limit the types that can be used with generics</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}