import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './styles/App.css';
import styles from './styles/Themes.module.css';
import { urlAddresses } from './assets/urlAddresses';
import { mockData } from './assets/mockData';
import { name } from './assets/text-content';
import changeTheme from './assets/images/theme-light-dark.png';

/* setting the theme light-dark */
const { light, dark, formatHeader, formatFirst, formatArticle, formatSection, contrastStyle } =
  styles;
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
/* ESTA FUNCIONANDO - UTILIZAR POR LOS MOMENTOS MOCK DATA
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      // ✅ Only runs once per app load
      for (let i = 0; i < urlAddresses.length; ++i) {
        getData(`card${i + 1}`, urlAddresses[i]);
      }
    }
  });
*/
useEffect(() => {
if (!didInit) {
  didInit = true;
  for (let i = 0; i < mockData.length; ++i) {
    let cardData = mockData[i];
    let item = {
      id: i+1,
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
        e['storeId'] = item['storeId'];
        e['title'] = item['title'];
        e['price'] = item['price'];
        e['category'] = item['category'];
        e['description'] = item['description'];
        e['image'] = item['image'];
      }
    });
    setItemsList(temp);      }
}
},[itemsList]);
//BORRAR AL DEJAR DE UTILIZAR MOCK DATA

/*  FUNCIONA BIEN ACTIVAR AL DEJAR DE UTILIZAR MOCK DATA
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
 */    

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
          <Link to="storepage">{name} Products</Link>
        </div>
       {/*  <div>
          <Link to="cartpage">Prueba</Link>
        </div> */}
      </nav>
      <section className={formatSection} style={{minHeight:'500px'}}>
      <Outlet context={{ formatArticle, formatSection, itemsList , name}} />
      </section>
      
    </>
  );
}

export default App;
