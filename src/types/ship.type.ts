export interface Ship {
  id: number;
  type: string;
  x: number;
  y: number;
  health: number;
  owner: string;
}

export interface Resource {
  x: number;
  y: number;
}