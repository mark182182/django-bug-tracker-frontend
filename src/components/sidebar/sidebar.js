import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../actions/sidebar';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: drawer => dispatch(toggleDrawer())
  }
}

class ConnectedSidebar extends Component {

  sideList = () => {
    return <span> Valami </span>;
  }

  render() {
    return (
      <div>
        <Button onClick={this.props.toggleDrawer}> Open </Button>
        <Drawer anchor='right' open={this.props.open} onClose={this.props.toggleDrawer}>
          <div onClick={this.props.toggleDrawer} onKeyDown={this.props.toggleDrawer}>
            {this.sideList()}
          </div>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.open
  }
}

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(ConnectedSidebar);
export default Sidebar;