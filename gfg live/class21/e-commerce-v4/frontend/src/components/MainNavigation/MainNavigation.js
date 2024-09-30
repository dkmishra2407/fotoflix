import React,{useState, useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../store/cart-context';
import { Badge } from '@mui/material';

const drawerWidth = 240;
const navItems = [{ name: 'Products', path: '/products' }, { name: 'Login', path: '/login' }, { name: 'Sign Up', path:'/register'}];

function MainNavigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const {cartLength} = useContext(CartContext);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6">
        MUI
      </Typography>
      <Divider />
      <List>
      
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Shopping Cart
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button to={item.path} component={NavLink } key={item.name} sx={{ color: '#fff'}}>
                {item.name}
              </Button>
            ))}
            <Badge to="/cart" component={NavLink} badgeContent={cartLength} color="secondary" showZero>
              <ShoppingCartIcon color="action" />
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {navItems.map((item) => (
              <Button to={item.path} component={NavLink } key={item.name} sx={{ color: '#fff'}}>
                {item.name}
              </Button>
        ))}
      </Box>
    </Box>
  );
}

export default MainNavigation;