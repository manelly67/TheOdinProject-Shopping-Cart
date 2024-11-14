import cartEmpty from '../assets/images/cart-outline.png';

const cartImg = new Image();
cartImg.src = cartEmpty;

const DivCartIcon = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
        padding: '3px',
        alignItems: 'center',
        fontSize: '1.3rem',
        fontWeight: '800',
      }}
    >
     
      <img src={cartImg.src} width="35px" height="35px" alt="cart-items"></img>
      <p>{props.numberOfItems}</p>
    </div>
  );
};

export default DivCartIcon;
