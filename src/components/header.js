import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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

export default function SearchAppBar() {
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  const sideList = side => (
    <div className = "menu" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)}>
      <div className = "head_menu"><p>Pokedex</p></div>
      <div className ="menu_section"><Link to = "/"><p>Home</p></Link></div>
      <div className = "menu_section"><Link to = "/about"><p>About</p></Link></div>
      <div className = "menu_section"><p><a href = "https://github.com/WilliaamKing/Pokedex" target="__blank">Code</a></p></div>
      <div className = "menu_section"><p><a href = "mailto:dimkas2001@icloud.com" target= "__blank">Contact</a></p></div>
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