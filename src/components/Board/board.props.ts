import { DragEvent } from "react";
import { IBoard, ICard } from "../../interface/board";

export interface IBoardProps {
  board: IBoard;

  onDragStart: (
    e: Event | DragEvent<HTMLDivElement>,
    board: IBoard,
    card: ICard
  ) => void;
  onDrop: (e: DragEvent<HTMLDivElement>, board: IBoard, card: ICard) => void;
  onDragEnd: (e: Event | DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: Event | DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: Event | DragEvent<HTMLDivElement>) => void;
  onDropCard: (e: Event | DragEvent<HTMLDivElement>, board: IBoard) => void;
}
