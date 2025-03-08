import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const typeGuardExample = `function processValue(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows value is a string here
    return value.toUpperCase();
  } else {
    // TypeScript knows value is a number here
    return value.toFixed(2);
  }
}`

const advancedTypesExample = `// Mapped Types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Conditional Types
type NonNullable<T> = T extends null | undefined ? never : T;

// Utility Types
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
}

type UserBasicInfo = Pick<User, "name" | "email">;`

export default function TypeScriptInterviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">TypeScript Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Common TypeScript interview questions with detailed explanations and examples.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What are Type Guards and how do they work?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Type Guards are expressions that perform runtime checks to guarantee the type of a value in a scope. They help TypeScript narrow down the type of a variable within conditional blocks.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Example:</h3>
            <CodeBlock code={typeGuardExample} language="typescript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Points:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>typeof checks for primitive types</li>
              <li>instanceof checks for class instances</li>
              <li>Custom type guards using type predicates</li>
              <li>Discriminated unions for complex types</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Explain Advanced Types in TypeScript</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            TypeScript provides powerful advanced types that help create complex type transformations and relationships.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Advanced Types Example:</h3>
            <CodeBlock code={advancedTypesExample} language="typescript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Types Covered:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Mapped Types: Transform types by mapping over their properties</li>
              <li>Conditional Types: Select types based on conditions</li>
              <li>Utility Types: Built-in type transformations</li>
              <li>Template Literal Types: Create types from string literals</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}