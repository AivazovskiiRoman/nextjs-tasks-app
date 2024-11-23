export const validateTask = (
  task: Task
): { isValid: boolean; error: string | null } => {
  if (!task.title?.trim()) {
    return { isValid: false, error: 'Title is required' };
  }
  if (!task.color) {
    return { isValid: false, error: 'Color is required' };
  }
  return { isValid: true, error: null };
};
