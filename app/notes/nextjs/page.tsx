import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

const routingExample = `// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <div>Post: {params.slug}</div>
}

// app/blog/[slug]/loading.tsx
export default function Loading() {
  return <div>Loading...</div>
}

// app/blog/[slug]/error.tsx
"use client"
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}`

const metadataExample = `// app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
  description: 'My app description',
  openGraph: {
    title: 'My App',
    description: 'My app description',
    images: ['https://example.com/og.jpg'],
  },
}`

export default function NextjsNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Next.js Notes</h1>
        <p className="text-muted-foreground mt-2">
          Essential Next.js concepts, features, and best practices.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>App Router and File Conventions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Next.js 13+ introduced the App Router with new file conventions for routing and special files.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Example Structure:</h3>
            <CodeBlock code={routingExample} language="typescript" />
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>page.tsx - Main route component</li>
            <li>layout.tsx - Shared layouts</li>
            <li>loading.tsx - Loading UI</li>
            <li>error.tsx - Error handling</li>
            <li>not-found.tsx - 404 pages</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Metadata and SEO</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Next.js provides built-in support for managing metadata and SEO through the Metadata API.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Metadata Configuration:</h3>
            <CodeBlock code={metadataExample} language="typescript" />
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Static metadata using the metadata object</li>
            <li>Dynamic metadata using generateMetadata</li>
            <li>File-based metadata with favicon.ico, robots.txt, etc.</li>
            <li>OpenGraph and Twitter card support</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}