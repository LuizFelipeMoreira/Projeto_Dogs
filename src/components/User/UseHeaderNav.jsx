import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import MinhasFotos from '../../Assets/feed.svg?react';
import AdicionarFoto from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia('(max-width: 40rem)');
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <div>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav}  ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && ' Minhas Fotos '}
        </NavLink>
        <NavLink to="estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="postar">
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={handleLogout}>
          {mobile && 'Sair'}
          <Sair />
        </button>
      </nav>
    </div>
  );
};

export default UserHeaderNav;
