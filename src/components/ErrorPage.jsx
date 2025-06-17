import { Link } from 'react-router-dom';
import styles from '../styles/Themes.module.css';

const { formatFirst } = styles;

const ErrorPage = () => {
  return (
    <div>
      <h2>Oh no, this route doesn&apos;t exist!</h2>
      <br></br>
      <br></br>
      <Link className={formatFirst} to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
