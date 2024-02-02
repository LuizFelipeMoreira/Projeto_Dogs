import React from 'react';
import UserHeaderNav from './UseHeaderNav';
import styles from './UseHeader.module.css';
import { useLocation } from 'react-router-dom';

const UseHeader = () => {
  const [title, setTittle] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    console.log(pathname);

    switch (pathname) {
      case '/conta/postar':
        setTittle('Poste suas Fotos');
        break;
      case '/conta/estatisticas':
        setTittle('Estatísticas');
        break;
      default:
        setTittle('Minha Conta');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="tittle">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UseHeader;
