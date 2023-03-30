import { CardProps } from "./card.props";
import "./styles.scss";
import { AiOutlineMore } from "react-icons/ai";
import Button from "../Custom/button";
import { TbUsers } from "react-icons/tb";
import { ImFileText2 } from "react-icons/im";
import { DragEvent } from "react";

const Card = (props: CardProps) => {
  const {
    card,
    board,
    onDragOver,
    onDragLeave,
    onDragStart,
    onDragEnd,
    onDrop,
  } = props;

  return (
    <>
      <div
        className={"card"}
        draggable
        onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)}
        onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)}
        onDragStart={(e: DragEvent<HTMLDivElement>) =>
          onDragStart(e, board, card)
        }
        onDragEnd={(e: DragEvent<HTMLDivElement>) => onDragEnd(e)}
        onDrop={(e: DragEvent<HTMLDivElement>) => onDrop(e, board, card)}
      >
        <div className="card__header">
          <div className="title">
            <h6>{card.title}</h6>
            <p>{card.description}</p>
          </div>
          <AiOutlineMore fontSize={"20px"} color={"#96A09B"} />
        </div>
        <div className="card__body">
          <Button className={`btn--${card?.markType}`}>{card?.mark}</Button>
          <Button className="btn--gray">
            <TbUsers fontSize={"12px"} />
            {card?.users}
          </Button>
          <Button className="btn--gray">
            <ImFileText2 fontSize={"12px"} />
            {card?.fileDescription}
          </Button>
        </div>
        <div className="card__footer">
          <img src={card?.author?.image} alt={card?.author?.name} />
          <div className="author">
            <p>{card?.author?.role}</p>
            <h5>{card?.author?.name}</h5>
          </div>
        </div>
      </div>
      <div id="dragging"></div>
    </>
  );
};

export default Card;
