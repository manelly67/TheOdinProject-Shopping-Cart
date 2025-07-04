import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './styles/App.css';
import styles from './styles/Themes.module.css';
import { urlAddresses } from './assets/urlAddresses';
import { name } from './assets/text-content';
import changeTheme from './assets/images/theme-light-dark.png';
import DivCartIcon from './components/DivCartIcon';

/* setting the theme light-dark */
const {
  light,
  dark,
  formatHeader,
  formatFirst,
  formatArticle,
  formatSection,
  contrastStyle,
} = styles;
const root = document.getElementById('root');
root.classList.add(formatFirst);
root.className = light;
const changeThemeImg = new Image();
changeThemeImg.src = changeTheme;
function setTheme() {
  const newTheme = root.className === dark ? light : dark;
  root.className = newTheme;
}

let didInit = false;
const emptyCart = [{ itemCode: '', numberItem: 0, priceCode: 0, totalLine: 0 }];

function App() {
  /* setting initial fetch */
  const initialList = () => {
    let temp = [];
    for (let i = 0; i < urlAddresses.length; ++i) {
      temp[i] = {
        id: i + 1,
        storeId: '',
        title: '',
        price: '',
        category: '',
        description: '',
        image: '',
      };
    }
    return temp;
  };

  const [itemsList, setItemsList] = useState(initialList);
  const [addingInCart, setAddingInCart] = useState(emptyCart);
  const [initial, setInitial] = useState(true);

  let numberOfItems = addingInCart
    .map((e) => e['numberItem'])
    .reduce((total, currentItem) => {
      return total + currentItem;
    }, 0);

  function handleClick(arg) {
    arg(true); // initial
  }

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      // ✅ Only runs once per app load
      for (let i = 0; i < urlAddresses.length; ++i) {
        getData(`card${i + 1}`, urlAddresses[i]);
      }
    }
  });

  async function getData(arg1, arg2) {
    // arg1 is the card arg2 is the url for that card
    try {
      const response = await fetch(arg2, { mode: 'cors' });
      const cardData = await response.json();

      let number = Number(arg1.slice(4));

      let item = {
        id: number,
        storeId: `${cardData['id']}`,
        title: `${cardData['title']}`,
        price: cardData['price'],
        category: `${cardData['category']}`,
        description: `${cardData['description']}`,
        image: `${cardData['image']}`,
      };
      let temp = [...itemsList];
      temp.map((e) => {
        if (Number(e.id) === Number(item.id)) {
          e['storeId'] = item['id'];
          e['title'] = item['title'];
          e['price'] = item['price'];
          e['category'] = item['category'];
          e['description'] = item['description'];
          e['image'] = item['image'];
        }
      });
      setItemsList(temp);
    } catch (error) {
      alert('Something was wrong. try again later');
      console.log(error);
    }
  }

  return (
    <>
      <header className={formatHeader}>
        <h1>The {name}</h1>
        <button
          className={`themeButton ${contrastStyle}`}
          style={{ borderRadius: '30px' }}
          onClick={() => {
            setTheme();
          }}
        >
          <img
            src={changeThemeImg.src}
            width="30px"
            height="30px"
            alt="theme-light-dark"
            className="iconImg"
          ></img>
        </button>
      </header>

      <nav className={formatFirst}>
        <div>
          <Link to="homepage">Home</Link>
        </div>
        <div>
          <div>
            <Link
              id="storeLink"
              to="storepage"
              onClick={() => handleClick(setInitial)}
            >
              {name} Products
            </Link>
            <DivCartIcon numberOfItems={numberOfItems} />
          </div>
        </div>
      </nav>
      <section className={formatSection} style={{ minHeight: '500px' }}>
        <Outlet
          context={{
            formatArticle,
            formatSection,
            itemsList,
            name,
            initial,
            setInitial,
            addingInCart,
            setAddingInCart,
          }}
        />
      </section>
    </>
  );
}

export default App;
