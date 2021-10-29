import React from 'react';

function Food(props) {
  const {name, quantity1, quantity2, quantity3, price1, price2, price3} = props;
  return (
      <div className="col">
        <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225"  src="#"  alt=""/>
          <div className="card-body">
            <h5 className="card-text">{name}</h5>
            <p className="card-text">{quantity1} - {price1}</p>
            <p className="card-text">{quantity2} - {price2}</p>
            <p className="card-text">{quantity3} - {price3}</p>

          </div>
        </div>
      </div>
  )
}

export default Food;
