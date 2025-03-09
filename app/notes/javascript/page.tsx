import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const prototypeExample = `// Constructor function
function Person(name) {
  this.name = name;
}

// Adding method to prototype
Person.prototype.sayHello = function() {
  return \`Hello, I'm \${this.name}\`;
};

// Class syntax (ES6+)
class PersonClass {
  constructor(name) {
    this.name = name;
  }
  
  sayHello() {
    return \`Hello, I'm \${this.name}\`;
  }
}`

const moduleExample = `// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Named exports
export { add, subtract };

// Default export
export default class Calculator {
  add(a, b) { return a + b; }
  subtract(a, b) { return a - b; }
}

// Importing
import Calculator, { add, subtract } from './math.js';`

export default function JavaScriptNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">JavaScript Notes</h1>
        <p className="text-muted-foreground mt-2">
          Core JavaScript concepts, patterns, and best practices.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Prototypes and Classes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            JavaScript uses a prototype-based inheritance model, which was later supplemented with class syntax in ES6.
            Understanding both approaches is crucial for effective JavaScript development.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Implementation Examples:</h3>
            <CodeBlock code={prototypeExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Concepts:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Prototype chain and inheritance</li>
              <li>Constructor functions vs Classes</li>
              <li>Instance and static methods</li>
              <li>The 'new' keyword behavior</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Modules and Import/Export</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            ES6 modules provide a standard way to organize and share code between JavaScript files.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Module System Example:</h3>
            <CodeBlock code={moduleExample} language="javascript" />
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Named exports for multiple values</li>
            <li>Default exports for main functionality</li>
            <li>Module scoping and encapsulation</li>
            <li>Dynamic imports for code splitting</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}