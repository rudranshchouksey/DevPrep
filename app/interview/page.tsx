import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InterviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Interview Preparation</h1>
      <p className="text-muted-foreground">
        Explore interview questions and answers for various technologies and concepts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>How to Use</CardTitle>
            <CardDescription>Make the most of the interview preparation section</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Select a topic from the sidebar to view related questions</li>
              <li>Each question includes detailed explanations and examples</li>
              <li>Practice with real-world scenarios</li>
              <li>Track your progress and bookmark important questions</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Popular Topics</CardTitle>
            <CardDescription>Most frequently accessed interview topics</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>React Hooks and Component Lifecycle</li>
              <li>Next.js App Router and Server Components</li>
              <li>TypeScript Advanced Types</li>
              <li>System Design Fundamentals</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}