function PopupWithForm(props,) {
  const isOpen = props.isOpen
  const closeAllPopups = props.onClose
  return (
    <section className={`popup popup-${props.name} ${isOpen ? 'popup_opened': ''}`} onClick={(e) => {if (e.target.classList.contains('popup')) {closeAllPopups(e)}}}>
      <div className="popup__container">
        <div className={`popup-${props.name}-block`}>
          <h3 className="popup__title">{props.title}</h3>
          <button type="button" aria-label="close" className={`popup__close-button popup__close-button_${props.closeButton}`} onClick={closeAllPopups}></button>
          <form name="popup__form" id={`popup__${props.name}`} className="popup__form" noValidate>
            {props.children}
            <button type="submit" className={`popup__submit-button popup__submit-button_${props.name}`}>{props.buttonText}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default PopupWithForm