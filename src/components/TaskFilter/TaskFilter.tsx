
export type TaskStatus = "pending" | "in-progress" | "completed";

// Props for TaskFilter component to handle
// filtering tasks by status and priority.
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => void;
}