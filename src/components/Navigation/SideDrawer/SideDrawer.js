import React from 'react'
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from './SideDrawer.css';
import BackDrop from '../../Inter/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
const SideDrawer = () => {
  
  
  
  return (
    <Aux>
      <BackDrop show/>
      <div className={styles.SideDrawer}>
          <div className={styles.Logo}>
            <Logo/>
          </div>
          
          <nav>
            <NavItems/> 
          </nav>
        
      </div>
    </Aux>
  );
};

export default SideDrawer
