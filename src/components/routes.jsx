import App from '../App';
import ErrorPage from './ErrorPage';
import Homepage from './Homepage';
import StorePage from './Store';
import CartPage from './Cart';
import ProductDetails from './ProductDetails';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'homepage',
        element: <Homepage />,
      },
      {
        path: 'storepage',
        element: <StorePage />,
        children: [
          {
            path: 'product',
            element: <ProductDetails />,
          },
        ],
      },
    ],

    errorElement: <ErrorPage />,
  },
  {
    path: 'cartpage',
    element: <CartPage />,
  },
];

export default routes;
