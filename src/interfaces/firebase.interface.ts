import { Timestamp } from "firebase/firestore/lite";

export interface Category {
  name: string;
  counter: number;
}

export interface Count {
  counter: number;
}

export interface Position {
  id: string;
  categories: Category[];
  joint_angles: string;
  last_updated: Timestamp;
}

export interface Controller {
  id: string;
  isActive: boolean;
  name: string;
}
