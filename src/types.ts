export type Category = 'work' | 'learning' | 'personal';
export type Priority = 'low' | 'normal' | 'high';

export interface Task {
  id: number;
  title: string;
  detail: string;
  completed: boolean;
  start: string;
  category: Category;
  priority: Priority;
}
