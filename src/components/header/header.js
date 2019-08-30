import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions/api';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import './header.scss';
import profilePic from '../../static/images/avatar.png';

export class Header extends Component {

  state = {
    title: ''
  }

  componentDidMount = async () => {
    await this.props.getData().then(result => {
      this.setState({ title: this.props.gameInfo[0].data.result.title });
    });
  }

  render() {
    return (
      <React.Fragment>
          <Avatar alt='Avatar' src={profilePic} className='avatar' />
          <Typography variant='subtitle2'>
            {this.state.title ? this.state.title : <Skeleton variant='text' width={280} height={30} />}
          </Typography>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameInfo: state.sidebarReducer.gameInfo
  };
}

export default connect(mapStateToProps, { getData })(Header);