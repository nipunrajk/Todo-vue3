export type Priority = 'low' | 'normal' | 'high';
export type Category = 'learning' | 'work' | 'personal';

export interface Task {
  id: number;
  title: string;
  detail: string;
  start: string; // ISO date (YYYY-MM-DD)
  completed: boolean;
  category: Category;
  priority: Priority;
}
