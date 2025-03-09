"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const topics = [
  { name: "React", href: "/notes/react" },
  { name: "Next.js", href: "/notes/nextjs" },
  { name: "TypeScript", href: "/notes/typescript" },
  { name: "JavaScript", href: "/notes/javascript" },
  { name: "Node.js", href: "/notes/nodejs" },
  { name: "Express.js", href: "/notes/expressjs" },
  { name: "Tailwind CSS", href: "/notes/tailwind" },
  { name: "Databases", href: "/notes/databases" },
  { name: "DevOps", href: "/notes/devops" },
  { name: "Data Structures", href: "/notes/data-structures" },
  { name: "Algorithms", href: "/notes/algorithms" },
  { name: "System Design", href: "/notes/system-design" },
  { name: "Machine Learning", href: "/notes/machine-learning" },
  { name: "MLOps", href: "/notes/mlops" },
  { name: "Deep Learning", href: "/notes/deep-learning" },
]

export function NotesNavigation() {
  const pathname = usePathname()

  return (
    <nav className="space-y-2">
      <div className="font-semibold mb-4 px-2">Topics</div>
      {topics.map((topic) => (
        <Button
          key={topic.href}
          variant="ghost"
          className={cn(
            "w-full justify-start",
            pathname === topic.href && "bg-accent"
          )}
          asChild
        >
          <Link href={topic.href}>{topic.name}</Link>
        </Button>
      ))}
    </nav>
  )
}