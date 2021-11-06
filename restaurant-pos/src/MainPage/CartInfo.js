import { func } from 'prop-types';
import { useState } from 'react';

const addCart = (id, name, srtImg, quantity, price) => {
  if (quantity === 0) {
    document.cookie = id + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
  else {
    document.cookie = id + '=' + name + ',' + srtImg + ',' + quantity + ',' + price;
  }
}

const CartInfo = () => {
  const [isChange, setIsChange] = useState(false);

  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  ca.sort(function(a,b){return a.split('=')[0]-b.split('=')[0]});

  let rs = [];

  let sum = 0;

  for (let i = 0; i < ca.length; i++) {
    ca[i].trim();
    if (ca[i] === '') break;
    let y = ca[i].split('=');
    let x = y[1].split(',');

    let prc = parseInt(x[3].replace('.',''))*parseInt(x[2].replace('.',''));
    sum += prc;
    prc = prc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'
    
    rs.push(
      <div className="row">
        <div className="col-3">
          <img src={x[1]} className="img-thumbnail" alt="item" />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-12">
              <p>{x[0]}</p>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-light"
                onClick={() => {
                  addCart(y[0], x[0], x[1], parseInt(x[2]) - 1, x[3]); setIsChange(!isChange)
              }}>-</button>
            </div>
            <div className="col-1">
              <p className="d-inline-block">{x[2]}</p>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-light"
                onClick={() => {
                  addCart(y[0],x[0],x[1],parseInt(x[2])+1,x[3]); setIsChange(!isChange)
                }}> +</button>
            </div>
            <div className="col-7 text-end">
              <p className="text-danger">{prc}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  sum = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'

  rs.push(
    <div>
      <hr className="mb-4" style={{ height: '5px' }} />

    <div className="d-flex justify-content-between px-x">
      <p className="fw-bold">Total:</p>
      <p className="fw-bold">{sum}</p>
    </div>
      <div className="d-flex justify-content-between p-2 mb-2">
      <button type="button" class="btn btn-danger w-100">Payment</button>
      </div>
    </div>
  )

  return (rs);
}

export default CartInfo;