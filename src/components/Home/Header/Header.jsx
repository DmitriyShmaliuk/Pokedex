import React, {useState}from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import {Link} from 'react-router-dom';
import './style.css';

//set style for elements
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 150,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  
  const [state, setState] = useState({
    left: false
  });
  
  const sideList = side => (
    <div className = "menu" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
      <div className = "headMenu"><p>Pokedex</p></div>
      <div className ="menuSection"><Link to = "/"><p>Home</p></Link></div>
      <div className = "menuSection"><Link to = "/about"><p>About</p></Link></div>
      <div className = "menuSection"><p><a href = "https://github.com/WilliaamKing/Pokedex" target="__blank">Code</a></p></div>
      <div className = "menuSection"><p><a href = "mailto:dimkas2001@icloud.com" target= "__blank">Contact</a></p></div>
    </div>
  );

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={toggleDrawer('left', true)}
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
          </Drawer>

          <Typography className={classes.title} variant="h6" noWrap>
           Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;