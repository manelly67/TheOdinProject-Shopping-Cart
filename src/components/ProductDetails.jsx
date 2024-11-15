import { useOutletContext } from 'react-router-dom';
import CartPage from './Cart';

const ProductDetails = () => {
  const {
    formatArticle,
    navigate,
    selecItem,
    itemsList,
    setInitial,
    divDetails,
    addingInCart,
    setAddingInCart,
  } = useOutletContext();
  
  const [productForDisplay] = itemsList.filter(
    (item) => item['id'] === Number(selecItem)
  );
  const itemPrice =
    productForDisplay['price'] === undefined
      ? 0
      : Number(productForDisplay['price']);
  
  const itemCode =
  productForDisplay['storeId'] === undefined
    ? 0
    : productForDisplay['storeId'];  

  function handleClick(arg){
    arg(true); //initial
  }

  return (
    <>
      <div className={divDetails}>
        <article className={formatArticle}>
          <div>
            <button
              onClick={() => {
                navigate(-1);
                handleClick(setInitial);
              }}
            >
              go back
            </button>
          </div>
          <section>
            {productForDisplay === undefined ? (
              <>{null}</>
            ) : (
              <>
                <h2 style={{ textTransform: 'uppercase' }}>
                  {productForDisplay['category']}
                </h2>
                <img
                  src={productForDisplay['image']}
                  width="250px"
                  height="300px"
                  alt=""
                ></img>
                <div>
                  <p
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {productForDisplay['title']}
                  </p>
                  <p style={{ fontSize: '1.3rem', fontWeight: '700' }}>
                    <span style={{ backgroundColor: 'white' }}>US$</span>
                    {` ${productForDisplay['price']}`}
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    {productForDisplay['description']}
                  </p>
                </div>
              </>
            )}
          </section>
        </article>
        <aside>
          <CartPage
            itemPrice={itemPrice}
            itemCode={itemCode}
            formatArticle={formatArticle}
            addingInCart={addingInCart}
            setAddingInCart={setAddingInCart}
          />
        </aside>
      </div>
    </>
  );
};

export default ProductDetails;
