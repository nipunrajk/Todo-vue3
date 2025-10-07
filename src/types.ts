export interface Task {
  id: number;
  title: string;
  detail: string;
  completed: boolean;
  start: string;
  category: 'work' | 'learning' | 'personal';
  priority: 'low' | 'normal' | 'high';
}
