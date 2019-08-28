import React, { Component } from 'react';
import store from '../../store/store';
import { addBug } from '../../actions/bugs';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

window.store = store;
window.addBug = addBug;

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
        With Redux.
      </div>
    )
  }
}
