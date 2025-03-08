"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const topics = [
  { name: "React", href: "/interview/react" },
  { name: "Next.js", href: "/interview/nextjs" },
  { name: "TypeScript", href: "/interview/typescript" },
  { name: "JavaScript", href: "/interview/javascript" },
  { name: "Node.js", href: "/interview/nodejs" },
  { name: "Express.js", href: "/interview/expressjs" },
  { name: "Tailwind CSS", href: "/interview/tailwind" },
  { name: "System Design", href: "/interview/system-design" },
  { name: "DevOps", href: "/interview/devops" },
  { name: "Data Structures", href: "/interview/data-structures" },
  { name: "Algorithms", href: "/interview/algorithms" },
]

export function InterviewNavigation() {
  const pathname = usePathname()

  return (
    <nav className="space-y-2">
      <div className="font-semibold mb-4 px-2">Interview Topics</div>
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