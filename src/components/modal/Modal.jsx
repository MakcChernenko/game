import css from "./modal.module.css";

const Modal = ({ setModal, modal }) => {
  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>Список змін і оновлень</h2>
      <ul className={css.list}>
        <li>
          <p>18.05.25 - Додав цей список</p>
          <p>19.05.25 - Зробив стартове меню за дизайном 'Konar_13'</p>
        </li>
      </ul>
      <button className={css.close} onClick={handleClick}>
        x
      </button>
    </div>
  );
};

export default Modal;
