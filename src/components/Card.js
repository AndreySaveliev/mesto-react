function Card(props) {


  function handleClick(props) {
    props.onCardClick(props.card);
  } 

  return(
    <div className="grid__cell" key={props.card}>
      <button className="grid__delete"></button>
      <img className="grid__img" src={props.card.link} onClick={() => handleClick(props)}/>
      <div className="grid__description">
        <h2 className="grid__name">{props.card.name}</h2>
        <button type="button" className="grid__like"></button>
        <p className="grid__like-number">{props.card.likes.length}</p>
      </div>
    </div>
  )
}


export default Card