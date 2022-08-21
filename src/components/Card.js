function Card({card, onCardClick}) {


  function handleClick() {
    onCardClick(card);
  } 

  return(
    <div className="grid__cell" key={card}>
      <button className="grid__delete"></button>
      <img className="grid__img" src={card.link} onClick={() => handleClick(card)}/>
      <div className="grid__description">
        <h2 className="grid__name">{card.name}</h2>
        <button type="button" className="grid__like"></button>
        <p className="grid__like-number">{card.likes.length}</p>
      </div>
    </div>
  )
}


export default Card