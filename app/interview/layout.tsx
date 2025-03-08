import { InterviewNavigation } from "@/components/interview/interview-navigation"

export default function InterviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
      <InterviewNavigation />
      <div>{children}</div>
    </div>
  )
}