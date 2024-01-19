export interface ITodos {
  completed: boolean;
  title: string;
  id: number;
}

export interface ITodosState {
  data: ITodos[];
}
