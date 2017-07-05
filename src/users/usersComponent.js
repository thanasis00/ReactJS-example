//users component

import React from 'react';
import usersActions from './usersActions.js';
import usersStore from './usersStore.js';
import Reflux from 'reflux';
import User from './userInfoComponent.js';

class Users extends Reflux.Component {
	constructor(props) {
		super(props);
		this.state = {}; // our store will add its own state to the component's
		this.store = usersStore; // <- just assign the store class itself
	}

  //on load get data from the store, this could be in constructor as well
  componentDidMount() {
    usersActions.getUsers();
  }

  render() {
    return (
      <div>
        <h3>Users List</h3>
        { this.state.users.map((user, index) =>
          <User data={user} key={index} />
        )}
      </div>
    );
  }
}

export default Users;
