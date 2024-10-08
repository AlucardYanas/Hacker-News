export interface Story {
  id: number;
  title: string;
  by: string;
  time: number;
  score: number;
  url: string;
  kids?: number[]; 
  text?: string;
  deleted?: boolean;  
}

