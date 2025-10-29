
export type TaskStatus = "pending" | "in-progress" | "completed";


//component that manages and displays a list of tasks.
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  dueDate: string;
}

// export interface TaskListProps {
//   tasks: Task[];
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void};

// //  function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
// //   return (
// //     <div>
// //       <h2>Task List</h2>
// //     </div>
// //   );
// }
// export default TaskList;