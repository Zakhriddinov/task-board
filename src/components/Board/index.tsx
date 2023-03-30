import Card from "../Card";
import FoundCard from "../Card/FoundCard";
import { IBoardProps } from "./board.props";
import styles from "./style.module.scss";

const Board = (props: IBoardProps) => {
  const { board, onDragOver, onDragLeave, onDragStart, onDragEnd, onDrop } =
    props;

  return (
    <div className={styles.board}>
      <div className={styles.board__inner} key={board.id}>
        <div className={styles.board__header}>
          <div className={styles.board__header__title}>
            <h6>
              {board.title} <span style={{ color: "#C9D2CE" }}>•</span>{" "}
              {board?.cards?.length || 0}
            </h6>
          </div>
        </div>
        <div className={styles.board__cards}>
          {board.cards.length === 0 ? (
            <FoundCard />
          ) : (
            board?.cards?.map((item) => (
              <>
                <Card
                  card={item}
                  board={board}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  onDrop={onDrop}
                />
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;
