import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const virtualDomExample = `// React creates a virtual DOM representation
const element = {
  type: 'div',
  props: {
    children: [
      { type: 'h1', props: { children: 'Hello' } },
      { type: 'p', props: { children: 'World' } }
    ]
  }
};`

export default function ReactInterviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">React Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Common React interview questions with detailed explanations and examples.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What is Virtual DOM and how does it work?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to improve performance by minimizing direct manipulation of the DOM.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Example Structure:</h3>
            <CodeBlock code={virtualDomExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Points:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>React creates a virtual representation of UI</li>
              <li>When state changes, React creates a new virtual DOM tree</li>
              <li>Differs the new virtual DOM with the previous one</li>
              <li>Only updates the changed elements in the actual DOM</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Explain the difference between state and props</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Props:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Read-only data passed from parent to child</li>
              <li>Cannot be modified by a component</li>
              <li>Changes in props trigger re-render</li>
              <li>Used for component configuration</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">State:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Mutable data managed within the component</li>
              <li>Can be updated using setState or useState</li>
              <li>State changes trigger re-render</li>
              <li>Used for internal component data</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}