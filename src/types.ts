export interface Task {
    id: string;
    title: string;
    completed: boolean;
    category: string;
    date: string;
}

export type Filter = 'all' | 'active' | 'completed';
