import React, { Component } from 'react';
import store from '../../store/store';
import { addBug } from '../../actions/bugs';
import { Paper } from '@material-ui/core';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import './main.scss';

window.store = store;
window.addBug = addBug;

export default class Main extends Component {
  render() {
    return (
      <div>
        <Paper className='header'>
          <Header />
          <Sidebar />
        </Paper>
      </div>
    )
  }
}
