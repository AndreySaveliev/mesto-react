function PopupWithForm({onClose, name, title, buttonText, isOpen, children}) {
  return (
    <section className={`popup popup-${name} ${isOpen && 'popup_opened'}`} onClick={(e) => {if (e.target.classList.contains('popup')) {onClose(e)}}}>
      <div className="popup__container">
        <div className={`popup-${name}-block`}>
          <h3 className="popup__title">{title}</h3>
          <button type="button" aria-label="close" className={`popup__close-button popup__close-button_${name}`} onClick={onClose}></button>
          <form name="popup__form" id={`popup__${name}`} className="popup__form" noValidate>
            {children}
            <button type="submit" className={`popup__submit-button popup__submit-button_${name}`}>{buttonText}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default PopupWithForm