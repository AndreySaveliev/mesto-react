import Card from "./Card"
function ImagePopup(props) {

  const isOpen = props.isOpen
  const closeAllPopup = props.onClose
  return(
    <section className={`popup popup-card popup-card-section ${isOpen ? `popup_opened` : ''}`}>
          <div className="popup-card__block">
            <div className="popup-card__description">
              <img className="popup-card__image" alt="" src={props.card.link}/>
              <h2 className="popup-card__title">{props.card.name}</h2>
            </div>
            <button type="button" aria-label="close" className="popup-card__close-button-card popup__close-button" onClick={closeAllPopup}></button>
          </div>
      </section>
  )
}

export default ImagePopup