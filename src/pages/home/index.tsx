import styles from "./styles.module.scss";
import { Fragment, useEffect, useState } from "react";
import { IBoard, ICard } from "../../interface/board";
import { fetchBoardList } from "../../helpers/ApiLayers";
import Board from "../../components/Board";

const HomePage = () => {
  const [boards, setBoards] = useState<IBoard[]>([]);
  const [currentBoard, setCurrentBoard] = useState<IBoard>();
  const [currentCard, setCurrentCard] = useState<ICard>({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const boards: IBoard[] = await fetchBoardList();
    setBoards(boards);
  }

  function onDragOver(e: Event | React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    if (target.className === "card") {
      target.style.boxShadow = "0 4px 3px grey";
    }
  }

  function onDragLeave(e: Event | React.DragEvent<HTMLDivElement>) {
    const target = e.target as HTMLButtonElement;
    target.style.boxShadow = "none";
  }

  function onDragStart(
    e: Event | React.DragEvent<HTMLDivElement>,
    board: IBoard,
    card: ICard
  ) {
    const target = e.target as HTMLButtonElement;

    setCurrentBoard(board);
    setCurrentCard(card);
    target.style.background = "#E2E2E2";
  }
  function onDragEnd(e: Event | React.DragEvent<HTMLDivElement>) {
    const target = e.target as HTMLButtonElement;
    target.style.background = "white";
  }

  function onDrop(
    e: Event | React.DragEvent<HTMLDivElement>,
    board: IBoard,
    card: ICard
  ) {
    e.preventDefault();
    const currentIndex = currentBoard?.cards.indexOf(currentCard) as number;
    currentBoard?.cards?.splice(currentIndex, 1);
    const dropIndex = board?.cards.indexOf(card) as number;
    board?.cards?.splice(dropIndex + 1, 0, currentCard);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard?.id) {
          return currentBoard;
        }
        return b;
      })
    );
  }

  function onDropCard(
    e: Event | React.DragEvent<HTMLDivElement>,
    board: IBoard
  ) {
    const target = e.target as HTMLButtonElement;
    board.cards.push(currentCard);

    const currentIndex = currentBoard?.cards.indexOf(currentCard) as number;
    currentBoard?.cards?.splice(currentIndex, 1);

    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard?.id) {
          return currentBoard;
        }
        return b;
      })
    );
    target.style.boxShadow = "none";
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.app_nav}>
        <h1>
          Заявки
          <span style={{ color: "#6D7471", fontWeight: "500" }}>• 5</span>
        </h1>
      </div>
      <div className={styles.app_boards_container}>
        <div className={styles.app_boards}>
          {boards.map((item) => (
            <div
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDropCard(e, item)}
            >
              <Board
                board={item}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDrop={onDrop}
                onDropCard={onDropCard}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
