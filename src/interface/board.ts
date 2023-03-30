export interface ICard {
  id?: number;
  title?: string;
  description?: string;
  users?: number;
  fileDescription?: number;
  author?: {
    image?: string;
    role?: string;
    name?: string;
  };
  mark?: string;
  markType?: string;
}
export interface IBoard {
  id: number;
  title: string;
  cards: ICard[];
}
