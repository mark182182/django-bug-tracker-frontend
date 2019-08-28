import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions/api';

export class Header extends Component {

  componentDidMount = async () => {
    await this.props.getData();
  }

  render() {
    return (
      <div>
        <div>
          {this.props.gameInfo}
        </div>
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameInfo: state.gameInfo
  };
}

export default connect(mapStateToProps, { getData })(Header);