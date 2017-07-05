//users store
import usersActions from './usersActions.js';
import Reflux from 'reflux';

//example of static list, this could be an api call with superagent
const usersList = [
	{
		name: 'Marie',
		position: 'Fullstack Developer',
		location: 'Greece'
	},
	{
		name: 'Anna',
		position: 'Frontend Developer',
		location: 'Germany'
	},
	{
		name: 'Jane',
		position: 'Web Developer',
		location: 'Netherlands'
	},
];

class UsersStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = [usersActions];
				this.state = {
					users: []
				}
    }

    onGetUsers()
    {
      this.setState({ users: usersList })
    }
}

export default UsersStore;
