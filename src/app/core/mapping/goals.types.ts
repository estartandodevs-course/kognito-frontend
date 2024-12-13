import { TaskProps } from '@pages/home/goals/goals.types';

export interface GetTasksProps {
  success: boolean;
  data: TaskProps[];
}

export interface CreateTaskSuccessProps {
  success: boolean;
  data: string;
}
