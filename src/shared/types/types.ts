export interface Story {
  id: number;
  title: string;
  by: string;
  time: number;
  score: number;
  url: string;
  kids?: number[]; 
  text?: string;  
}


export interface Comment {
  id: number;
  by: string;
  text: string;
  time: number;
  kids?: number[]; 
}
