import React,{Fragment} from 'react';
import MainNavigation from '../MainNavigation/MainNavigation';
import Container from '@mui/material/Container';

const Layout = (props) => {
  return (
      <Fragment>
          <header>
              <MainNavigation/>
          </header>
          <Container maxWidth="lg" component="main">
            {props.children}
          </Container>
          <footer>
              
          </footer>
    </Fragment>
  )
}

export default Layout