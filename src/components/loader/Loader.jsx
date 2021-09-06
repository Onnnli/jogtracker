import React from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import { isLoading } from '../../redux/loading/loadingSelector';

import styles from './Loader.module.css';

const Loader = ({ children }) => {
  const isLoaded = useSelector(isLoading);

  if (!isLoaded) {
    return <>{children}</>;
  }
  return (
    <div className={styles.loader__wrapper}>
      <ClipLoader size={70} color="#7ed321" isLoading={!!isLoaded} />
    </div>
  );
};

export default Loader;
