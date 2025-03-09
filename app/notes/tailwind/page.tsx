import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const layoutExample = `// Flexbox layout
<div className="
  flex
  flex-col
  md:flex-row
  items-center
  justify-between
  gap-4
">
  <div className="flex-1 min-w-0">
    <h2 className="truncate">Content Title</h2>
  </div>
  <div className="flex-shrink-0">
    <button className="btn">Action</button>
  </div>
</div>

// Grid layout
<div className="
  grid
  grid-cols-12
  gap-4
">
  <div className="col-span-12 md:col-span-8">
    Main content
  </div>
  <div className="col-span-12 md:col-span-4">
    Sidebar
  </div>
</div>`

const animationExample = `// Hover and transition effects
<button className="
  transform
  transition-all
  duration-300
  ease-in-out
  hover:scale-105
  hover:shadow-lg
  active:scale-95
">
  Click me
</button>

// Loading animation
<div className="
  animate-spin
  h-8
  w-8
  border-4
  border-primary
  border-t-transparent
  rounded-full
"/>

// Fade in animation
<div className="
  animate-fade-in
  opacity-0
  translate-y-4
  duration-700
">
  Content
</div>`

export default function TailwindNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Tailwind CSS Notes</h1>
        <p className="text-muted-foreground mt-2">
          Advanced Tailwind CSS concepts, layouts, and animation techniques.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Layout Patterns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Common layout patterns and techniques using Tailwind CSS flexbox and grid systems.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Layout Examples:</h3>
            <CodeBlock code={layoutExample} language="jsx" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Concepts:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Flexbox utilities</li>
              <li>Grid system</li>
              <li>Responsive layouts</li>
              <li>Container queries</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Animations and Transitions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Creating smooth animations and transitions using Tailwind CSS utilities.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Animation Examples:</h3>
            <CodeBlock code={animationExample} language="jsx" />
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Transition properties</li>
            <li>Transform utilities</li>
            <li>Animation keyframes</li>
            <li>Custom animation configuration</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}