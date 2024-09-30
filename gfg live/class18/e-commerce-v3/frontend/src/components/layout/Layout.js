import React,{Fragment} from 'react';
import MainNavigation from '../MainNavigation/MainNavigation';

const Layout = (props) => {
  return (
      <Fragment>
          <header>
              <MainNavigation/>
          </header>
          <main>
              {props.children}
          </main>
          <footer>
              
          </footer>
    </Fragment>
  )
}

export default Layout