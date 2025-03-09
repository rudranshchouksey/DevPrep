import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const serverComponentExample = `// app/page.tsx
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}`

const clientComponentExample = `"use client"

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}`

export default function NextjsInterviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Next.js Interview Questions</h1>
        <p className="text-muted-foreground mt-2">
          Common Next.js interview questions with detailed explanations and examples.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What are Server and Client Components in Next.js 13+?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Next.js 13 introduced a new model for rendering components, with Server Components being the default and Client Components being opt-in.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Server Component Example:</h3>
            <CodeBlock code={serverComponentExample} language="typescript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Client Component Example:</h3>
            <CodeBlock code={clientComponentExample} language="typescript" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Key Differences:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Server Components run only on the server and reduce client-side JavaScript</li>
              <li>Client Components can use hooks and browser APIs</li>
              <li>Server Components can directly access backend resources</li>
              <li>Client Components are marked with "use client" directive</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Explain Next.js Data Fetching Methods</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Next.js provides several methods for fetching data, each suited for different use cases.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Methods:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Server-side Rendering (SSR) with getServerSideProps</li>
              <li>Static Site Generation (SSG) with getStaticProps</li>
              <li>Incremental Static Regeneration (ISR)</li>
              <li>Client-side fetching with SWR or React Query</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}