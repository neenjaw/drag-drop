export type Task = {
  id: string
  content: string
}

type TaskIndex = {
  [key: string]: Task
}

export const taskIndex: TaskIndex = {
  'task-1': { id: 'task-1', content: 'Take out the trash' },
  'task-2': { id: 'task-2', content: 'Take out the horse' },
  'task-3': { id: 'task-3', content: 'Take out the cat' },
  'task-4': { id: 'task-4', content: 'Take out the dog' },
  'task-5': { id: 'task-5', content: 'Take out the kids' },
}

export type Column = {
  id: string
  title: string
  taskIds: Task['id'][]
}

type ColumnIndex = {
  [key: string]: Column
}

export const columnIndex: ColumnIndex = {
  'column-1': {
    id: 'column-1',
    title: 'Todo',
    taskIds: ['task-1', 'task-4', 'task-3'],
  },
  'column-2': {
    id: 'column-2',
    title: 'In Progress',
    taskIds: ['task-5', 'task-2'],
  },
}

export const initialData = {
  taskIndex,
  columnIndex,
  columnOrder: ['column-1', 'column-2'],
}
