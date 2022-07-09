import React from 'react';
import Image from 'next/image';
import ProductInfo from '@components/ProductInfo';
import styles from '@styles/ProductDetail.module.scss';
import close from '@icons/icon_close.png';

const ProductDetail = () => {
  return (
    <aside className={styles.ProductDetail}>
      <div className={styles['ProductDetail-close']}>
        <Image src={close} alt="close" width={50} height={50} />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
