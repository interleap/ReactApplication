import React from 'react';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            title: "Users",
            users: []
        };
		this.getUser = this.getUser.bind(this);
    }
	getUser(){
		
		axios.get("http://localhost:8086/users")
		  .then(res => {
			const users= res.data;
			this.setState({ users });
		  })
	}
	updateUser(){
		alert("User updated");
	}
    render() {
	  return (
         <div>
			<button onClick={this.getUser}>GetAllUser</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<button onClick={this.updateUser}>UpdateUser</button>
			 <table>
			 <tbody>
			 <tr> 
			 <th>Id</th> 
			 <th>User Name</th>
			 </tr>
				{ this.state.users.map((user,i) => <li key={'user_' + i}><tr><td>{user.id}</td></tr>  <tr><td> {user.userName}</td></tr></li>)}
			 </tbody>
			 </table>
         </div>
      );
   }
}
export default App;