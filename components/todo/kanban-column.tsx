"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Task } from "@/types/todo"
import { TaskCard } from "./task-card"

interface KanbanColumnProps {
  title: string
  tasks: Task[]
}

export function KanbanColumn({ title, tasks }: KanbanColumnProps) {
  return (
    <Card className="h-[calc(100vh-12rem)]">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <span className="text-sm text-muted-foreground">
            {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </CardContent>
    </Card>
  )
}