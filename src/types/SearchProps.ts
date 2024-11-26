export interface SearchProps {
  tasks: Task[];
  onSearch: (filteredTasks: Task[]) => void;
}