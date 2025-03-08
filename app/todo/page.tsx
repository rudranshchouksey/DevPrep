"use client"

import { useState } from 'react'
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { KanbanColumn } from '@/components/todo/kanban-column'
import { AddTaskDialog } from '@/components/todo/add-task-dialog'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface Task {
  id: string
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'completed'
}

export default function TodoPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)

  const columns = [
    { id: 'todo', title: 'To Do' },
    { id: 'in-progress', title: 'In Progress' },
    { id: 'completed', title: 'Completed' }
  ]

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over) return

    const activeTask = tasks.find(task => task.id === active.id)
    const overColumn = over.id

    if (activeTask && overColumn !== activeTask.status) {
      setTasks(tasks.map(task =>
        task.id === activeTask.id
          ? { ...task, status: overColumn as Task['status'] }
          : task
      ))
    }
  }

  function addTask(newTask: Omit<Task, 'id'>) {
    setTasks([...tasks, { ...newTask, id: crypto.randomUUID() }])
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Task Management</h1>
        <Button onClick={() => setIsAddTaskOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Task
        </Button>
      </div>

      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map(column => (
            <SortableContext key={column.id} items={tasks.filter(task => task.status === column.id)}>
              <KanbanColumn
                title={column.title}
                tasks={tasks.filter(task => task.status === column.id)}
              />
            </SortableContext>
          ))}
        </div>
      </DndContext>

      <AddTaskDialog
        open={isAddTaskOpen}
        onOpenChange={setIsAddTaskOpen}
        onSubmit={addTask}
      />
    </div>
  )
}