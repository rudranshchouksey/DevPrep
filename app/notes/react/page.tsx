import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const reactHooksExample = `const [count, setCount] = useState(0);
const increment = () => setCount(prev => prev + 1);

useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`

const customHookExample = `function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}`

export default function ReactNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">React Notes</h1>
        <p className="text-muted-foreground mt-2">
          Essential concepts, patterns, and best practices in React development.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hooks Fundamentals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Hooks are functions that allow you to "hook into" React state and lifecycle features from function components.
            They let you use state and other React features without writing a class component.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Basic Usage Example:</h3>
            <CodeBlock code={reactHooksExample} language="typescript" />
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>useState: Manages local state in function components</li>
            <li>useEffect: Handles side effects in components</li>
            <li>useContext: Subscribes to React context</li>
            <li>useRef: Maintains mutable values across renders</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Hooks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Custom Hooks are JavaScript functions that start with "use" and may call other Hooks.
            They let you extract component logic into reusable functions.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">useLocalStorage Hook Example:</h3>
            <CodeBlock code={customHookExample} language="typescript" />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            This custom hook provides a way to persist state in localStorage while keeping it in sync with component state.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}