import Card from "./Card";
function ImagePopup({ onClose, card, isOpen }) {
  return (
    <section
      className={`popup popup-card popup-card-section ${
        isOpen && "popup_opened"
      }`}
      onClick={(e) => {
        if (e.target.classList.contains("popup")) {
          onClose(e);
        }
      }}
    >
      <div className="popup-card__block">
        <div className="popup-card__description">
          <img className="popup-card__image" alt="" src={card.link} />
          <h2 className="popup-card__title">{card.name}</h2>
        </div>
        <button
          type="button"
          aria-label="close"
          className="popup-card__close-button-card popup__close-button"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default ImagePopup;
