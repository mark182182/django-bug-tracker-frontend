import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../actions/sidebar';
import './sidebar.scss';

const mapDispatch = (dispatch) => {
  return {
    toggleDrawer: drawer => dispatch(toggleDrawer())
  }
}

class ConnectedSidebar extends Component {

  render() {
    return (
      <React.Fragment>
        <MenuIcon className='icon' onClick={this.props.toggleDrawer}/>
        <Drawer anchor='right' open={this.props.open} onClose={this.props.toggleDrawer}>
          <div onClick={this.props.toggleDrawer} onKeyDown={this.props.toggleDrawer}>
            <div>
              Current tickets
           </div>
            <div>
              Contact support
            </div>
            <div>
              Username
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    open: state.sidebarReducer.open
  }
}

const Sidebar = connect(mapState, mapDispatch)(ConnectedSidebar);
export default Sidebar;