import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={styles.Nav}>
        <Image src={menu} alt="menu" className={styles.menu} width={30} height={30} />
        <div className={styles['navbar-left']}>
          <Link href="/">
            <Image src={logo} alt="logo" className={styles['nav-logo']} width={110} height={60} />
          </Link>
          <ul>
            <li>
              <Link href="/">Linkll</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={(styles['more-clickable-area'], styles['navbar-email'], styles.pointer)} onClick={() => toggleMenu()} role="presentation">
              platzi@example.com
            </li>
            <li className={styles['navbar-shopping-cart']} onClick={() => toggleOrder()} role="presentation">
              <Image className={styles['more-clickable-area pointer']} src={shoppingCart} alt="shopping cart" width={30} height={30}/>
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;