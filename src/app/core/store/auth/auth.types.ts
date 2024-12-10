export interface UserProps {
  name: string;
  role: 'teacher' | 'student';
}

export interface AuthStateProps {
  user: UserProps | null;
  token: string | null;
  loading: boolean;
}
