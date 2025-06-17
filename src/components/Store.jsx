import { useState, useEffect } from 'react';
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';

import styles from '../styles/Store.module.css';

const StorePage = () => {
  const navigate = useNavigate();
  const {
    formatArticle,
    itemsList,
    initial,
    setInitial,
    addingInCart,
    setAddingInCart,
  } = useOutletContext();
  const { card, lastLine, hide, show, divDetails } = styles;
  const [selecItem, useSelecItem] = useState(null);

  useEffect(() => {
    switch (initial) {
      case true:
        showList();
        break;
      case false:
        hideList();
        break;
    }
  });

  function hideList() {
    document.getElementById('productList').className = '';
    document.getElementById('productList').classList.add(hide);
  }

  function showList() {
    document.getElementById('productList').className = '';
    document.getElementById('productList').classList.add(show);
  }

  function navigateToProduct() {
    navigate('/storepage/product');
  }

  function handleClick(event, arg1, arg2) {
    let temp = event.currentTarget.id;
    arg1(temp);
    arg2(false);
  }

  return (
    <>
      <div id="productList">
        <ul>
          {itemsList.includes(undefined) ? (
            <>{null}</>
          ) : (
            itemsList.map((x) => {
              return (
                <li key={crypto.randomUUID()} className={card}>
                  <div>
                    <img
                      src={x['image']}
                      width="200px"
                      height="200px"
                      alt=""
                    ></img>
                  </div>

                  <div>
                    <p style={{ textAlign: 'center' }}>{x['title']}</p>
                  </div>

                  <div className={lastLine}>
                    <p>
                      <span>US$</span>
                      {` ${x['price']}`}
                    </p>
                    <button
                      id={x['id']}
                      onClick={(event) => {
                        handleClick(event, useSelecItem, setInitial);
                        navigateToProduct();
                      }}
                    >
                      see more
                    </button>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <div>
        <Outlet
          context={{
            formatArticle,
            navigate,
            selecItem,
            itemsList,
            showList,
            setInitial,
            divDetails,
            addingInCart,
            setAddingInCart,
          }}
        />
      </div>
    </>
  );
};

export default StorePage;
