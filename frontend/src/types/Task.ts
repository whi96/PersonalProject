export type Task = {
  id: number
  projectId: number
  title: string
  description: string
  status: "pending" | "in_progress" | "completed"
  assignedTo: number
}
