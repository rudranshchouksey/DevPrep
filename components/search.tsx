"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search as SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

interface SearchResult {
  title: string
  description: string
  href: string
  category: "Notes" | "Interview"
}

const searchData: SearchResult[] = [
  {
    title: "React Hooks",
    description: "Understanding React Hooks and their usage",
    href: "/notes/react",
    category: "Notes"
  },
  {
    title: "Virtual DOM",
    description: "How Virtual DOM works in React",
    href: "/interview/react",
    category: "Interview"
  },
  // Add more search data here
]

export function Search() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="hidden md:inline">Search...</span>
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Notes">
            {searchData
              .filter((item) => item.category === "Notes")
              .map((item) => (
                <CommandItem
                  key={item.href}
                  onSelect={() => {
                    router.push(item.href)
                    setOpen(false)
                  }}
                >
                  <span>{item.title}</span>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandGroup heading="Interview Questions">
            {searchData
              .filter((item) => item.category === "Interview")
              .map((item) => (
                <CommandItem
                  key={item.href}
                  onSelect={() => {
                    router.push(item.href)
                    setOpen(false)
                  }}
                >
                  <span>{item.title}</span>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}