// Calendar utilities
export interface CalendarData {
  weekday: string;
  monthName: string;
  year: number;
  day: number;
  cells: (number | null)[];
}

export function generateCalendarData(date: Date = new Date()): CalendarData {
  const weekday = date.toLocaleString(undefined, { weekday: 'long' });
  const monthName = date.toLocaleString(undefined, { month: 'long' });
  const year = date.getFullYear();
  const day = date.getDate();

  const first = new Date(year, date.getMonth(), 1);
  const start = (first.getDay() + 6) % 7; // Monday=0
  const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
  const cells = Array.from({ length: 42 }, (_, i) => {
    const v = i - start + 1;
    return v >= 1 && v <= daysInMonth ? v : null;
  });

  return {
    weekday,
    monthName,
    year,
    day,
    cells,
  };
}

// Helper function to check if a date is weekend
export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday = 0, Saturday = 6
}

// Helper function to get dates with tasks/notes
export function getDatesWithTasks(
  tasks: Array<{ start: string }>
): Set<string> {
  return new Set(tasks.map((task) => task.start));
}

// Helper function to format date for comparison
export function formatDateForComparison(
  year: number,
  month: number,
  day: number
): string {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(
    2,
    '0'
  )}`;
}
