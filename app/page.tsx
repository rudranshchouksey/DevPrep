import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, BookOpen, FileQuestion } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to DevPrep
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Your all-in-one platform for task management, technical notes, and interview preparation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Link href="/todo" className="block">
          <Card className="h-full transition-all hover:shadow-lg">
            <CardHeader>
              <ClipboardList className="w-8 h-8 mb-2" />
              <CardTitle>To-Do List</CardTitle>
              <CardDescription>
                Manage your tasks with a Kanban-style board
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Organize tasks with drag-and-drop functionality across different status columns.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/notes" className="block">
          <Card className="h-full transition-all hover:shadow-lg">
            <CardHeader>
              <BookOpen className="w-8 h-8 mb-2" />
              <CardTitle>Technical Notes</CardTitle>
              <CardDescription>
                Store and organize development concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create and manage notes with code snippets for various technologies.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/interview" className="block">
          <Card className="h-full transition-all hover:shadow-lg">
            <CardHeader>
              <FileQuestion className="w-8 h-8 mb-2" />
              <CardTitle>Interview Prep</CardTitle>
              <CardDescription>
                Practice technical interview questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access a curated list of interview questions with detailed answers.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="mt-12">
        <Button asChild size="lg">
          <Link href="/todo">
            Get Started
          </Link>
        </Button>
      </div>
    </div>
  )
}