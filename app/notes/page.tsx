import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Technical Notes</h1>
      <p className="text-muted-foreground">
        Select a topic from the sidebar to view detailed notes and code snippets.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Learn how to use the notes section effectively</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Browse topics from the sidebar navigation</li>
              <li>Each topic contains detailed explanations and examples</li>
              <li>Code snippets can be copied with a single click</li>
              <li>Search functionality helps you find specific concepts</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
            <CardDescription>Latest additions to the notes section</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Advanced React Hooks patterns</li>
              <li>Next.js 13 Server Components</li>
              <li>TypeScript best practices</li>
              <li>Modern CSS techniques</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}