const Item = ( {id, title, text} ) => {
  return(
      <div>
          {/* <img src={} /> */}
          <h1>{ title }</h1>
          <h3> { text }</h3>
          <p> { id } </p>
      </div>
  )
}

export default Item;