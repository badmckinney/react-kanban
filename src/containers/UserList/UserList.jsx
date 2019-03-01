import React, { Component } from 'react';
import User from '../../components/User';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentWillMount() {
    return this.props.loadUsers();
  }

  render() {
    const userList = this.props.users
      .map((user) => {
        if (user.id === parseInt(this.props.selected)) {
          return (
            <User key={user.id}
              id={user.id}
              firstname={user.first_name}
              selected={true} />
          );
        } else {
          return (
            <User key={user.id}
              id={user.id}
              firstname={user.first_name}
              selected={false} />
          );
        }
      });
    return (
      <>
        {userList}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => {
      return dispatch(loadUsers());
    }
  };
};

UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default UserList;