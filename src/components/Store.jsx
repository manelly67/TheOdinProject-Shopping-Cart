import { useState } from 'react';
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';

import styles from '../styles/Store.module.css';

const StorePage = () => {
  const navigate = useNavigate();
  const { formatArticle, itemsList } = useOutletContext();
  const { card, lastLine, hide, show, divDetails } = styles;
  const [selecItem, useSelecItem] = useState(null);

  console.log(selecItem);

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

  function handleClick(event,arg){
    let temp =  event.currentTarget.id;
    arg(temp);
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
                       handleClick(event,useSelecItem);
                        navigateToProduct();
                        hideList();
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
            divDetails,
          }}
        />
      </div>
    </>
  );
};

export default StorePage;
