import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const responsiveExample = `// Responsive design example
<div className="
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-4
  p-4
  md:p-6
  lg:p-8
">
  <div className="
    bg-white
    dark:bg-gray-800
    rounded-lg
    shadow-md
    p-4
    hover:shadow-lg
    transition-shadow
  ">
    <h2 className="text-lg md:text-xl font-bold">Card Title</h2>
    <p className="text-gray-600 dark:text-gray-300">Card content</p>
  </div>
</div>`

const customizationExample = `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... other shades
          900: '#0c4a6e',
        },
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}`

export default function TailwindInterviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Tailwind CSS Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Common Tailwind CSS interview questions with detailed explanations and examples.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Explain Tailwind's Responsive Design System</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Tailwind CSS provides a mobile-first responsive design system using breakpoint prefixes.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Responsive Example:</h3>
            <CodeBlock code={responsiveExample} language="jsx" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Breakpoint Prefixes:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>sm: 640px and up</li>
              <li>md: 768px and up</li>
              <li>lg: 1024px and up</li>
              <li>xl: 1280px and up</li>
              <li>2xl: 1536px and up</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customization and Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Tailwind CSS is highly customizable through its configuration file.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Configuration Example:</h3>
            <CodeBlock code={customizationExample} language="javascript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Customization Options:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Theme customization</li>
              <li>Plugin system</li>
              <li>Custom variants</li>
              <li>JIT (Just-In-Time) mode</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}