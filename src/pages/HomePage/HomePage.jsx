import { useSelector } from 'react-redux';
import { FiArrowRight } from 'react-icons/fi';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <main className={css.main}>
      <div className={css.content}>
        <h1 className={css.title}>Welcome!</h1>
        <p className={css.text}>You can signup or login if you registered!</p>
        {isLoggedIn ? (
          <Link className={css.link} to="/contacts">
            <FiArrowRight /> Contacts
          </Link>
        ) : (
          <div className={css.links}>
            <Link className={css.link} to="/register">
              Signup
            </Link>
            <Link className={css.link} to="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
