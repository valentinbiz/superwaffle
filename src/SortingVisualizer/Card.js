import React from 'react';

const Card = ({data, cardIndex}) => {
  return (
    <div>
      {data[cardIndex].map((item, idx) => ( 
        <div className='card' key={idx}>
          <h3>{item.title}</h3> <br />
          <h5>{item.name}</h5> <br />
          <h5>{item.step1}</h5> <br />
          <h5>{item.step2}</h5> <br />
          <h5>{item.step3}</h5> <br />
          <h5>{item.step4}</h5>
        </div>
      ))}
    </div>
  )
}

export default Card;