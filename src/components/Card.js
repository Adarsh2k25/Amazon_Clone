import React from 'react'
function Card() {
  return (
    <div className='card'>
        <p className='title'>Placements</p>
        <p className='price'>$10.00</p>
        <p className='starRating'>stars</p>
        <div className='imageHolder'>
          <img src='https://m.media-amazon.com/images/I/71g2ednj0JL._AC_SY400_.jpg' alt=''/>
          <br/>
          <br/>
          <button>Add to Cart</button>
        </div>
      </div>
  )
}

export default Card
