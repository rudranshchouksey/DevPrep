import { NotesNavigation } from "@/components/notes/notes-navigation"

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
      <NotesNavigation />
      <div>{children}</div>
    </div>
  )
}