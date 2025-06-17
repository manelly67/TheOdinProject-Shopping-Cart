import DivCartIcon from './DivCartIcon';
import { useState } from 'react';

function addToArray(arg1, arg2, arg3, arg4, addingInCart, setAddingInCart) {
  switch (arg2 !== 0) {
    case true:
      {
        let itemToAdd = {
          itemCode: arg1,
          numberItem: arg2,
          priceCode: arg3,
          totalLine: arg4,
        };
        let tempArray = [...addingInCart];
        tempArray.push(itemToAdd);
        setAddingInCart(tempArray);
      }
      break;

    case false:
      alert('nothing to add - increase number of items');
      break;
  }
}

function increase(count, setCount) {
  let temp = count;
  ++temp;
  setCount(temp);
}

function decrease(count, setCount) {
  let temp = count;
  switch (temp !== 0) {
    case true:
      --temp;
      setCount(temp);
      break;
    case false:
      break;
  }
}

const CartPage = (props) => {
  const [count, setCount] = useState(0);
  const totalItem = count * props.itemPrice;
  let totalAmount = props.addingInCart
    .map((e) => e['totalLine'])
    .reduce((total, currentItem) => {
      return total + currentItem;
    }, 0)
    .toFixed(2);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '15px',
          alignItems: 'center',
          paddingLeft: '15px',
        }}
      >
        <h2>your cart!</h2>
        <div className={props.formatArticle}>
          <DivCartIcon numberOfItems={props.numberOfItems} />
        </div>
      </div>
      <section>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          {`US$  ${props.itemPrice}`}
        </p>
        <p>Catalog Code: {props.itemCode} </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <p>Number Of Items: </p>
          <button
            style={{
              height: '30px',
              marginLeft: '5px',
              fontSize: '1.3rem',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => {
              decrease(count, setCount);
            }}
          >
            -
          </button>
          <p
            style={{
              width: '30px',
              height: '30px',
              border: '2px solid black',
              alignContent: 'center',
              textAlign: 'center',
            }}
          >
            {count}
          </p>
          <button
            style={{ height: '30px', fontSize: '1.3rem', fontWeight: '800' }}
            onClick={() => {
              increase(count, setCount);
            }}
          >
            +
          </button>
          <div style={{ paddingLeft: '5px' }}>
            <p>{`= US$ ${totalItem}`}</p>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            paddingTop: '10px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            style={{ width: '200px', fontSize: '1.2rem' }}
            onClick={() => {
              addToArray(
                props.itemCode,
                count,
                props.itemPrice,
                totalItem,
                props.addingInCart,
                props.setAddingInCart
              );
            }}
          >
            Add to Cart
          </button>
        </div>

        <div style={{ paddingTop: '10px' }}>
          <p>{`SHOPPING CART = US$ ${totalAmount}`}</p>
        </div>
        <div
          style={{
            width: '100%',
            paddingTop: '15px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button style={{ width: '100px', fontSize: '1.4rem' }}>Pay</button>
        </div>
      </section>
    </>
  );
};

export default CartPage;
