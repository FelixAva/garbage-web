import { Timestamp } from "firebase/firestore/lite";

export interface Category {
  name: string;
  count: number;
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
  type: string;
}
