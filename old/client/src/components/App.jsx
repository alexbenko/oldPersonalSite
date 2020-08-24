import React, { Component } from 'react';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import Adventures from './adventures/Adventures';
import Welcome from './Welcome';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100%"
  },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <HashRouter>
      <div className="navbar-holder" style ={{padding:'0px,0px,0px,0px'}}>
        <AppBar position="sticky" style={{}}>
          <Tabs value={value} onChange={handleChange} >
            <Tab label="Home" component={Link} to="/" />
            <Tab label="My Skills" component={Link} to="/skills" />
            <Tab label="Adventures" component={Link} to="/adventures"/>
            <Tab label="Contact Me" component={Link} to="/contact"/>
          </Tabs>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/adventures">
            <Adventures />
          </Route>
        </Switch>

      </div>
    </HashRouter>
  );
}

