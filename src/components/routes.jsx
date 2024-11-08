import App from '../App';
import ErrorPage from './ErrorPage';
import Homepage from './Homepage';
import StorePage from './Store';
import CartPage from './Cart';

const routes = [
  {
    path: '/',
    element: <App />,
    children:[
      {
        index:true,
        element: <Homepage />,
      },
      {
        path: 'homepage',
        element: <Homepage />,
      },
      {
        path: 'storepage',
        element: <StorePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  
];

export default routes;
