import "./styles.scss";
import fileImg from "../../assets/file.png";

const FoundCard = () => {
  return (
    <div className='foundCard'>
      <img src={fileImg} alt="file image" />
      <h3>Если есть подходящие заявки, перетащите их сюда 🤓</h3>
    </div>
  );
};

export default FoundCard;
