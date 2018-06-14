import React from 'react';
import axios from 'axios';

//App component
class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            title: "Users",
            users: [],
			name:''
        };
		this.getUser = this.getUser.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
    }
	//To Retrieve all the user from spring boot api through axios
	getUser(){
		
		axios.get("http://localhost:8086/users")
		  .then(res => {
			const users= res.data;
			this.setState({ users });
		  })
	}
	//set the updated(value on the form) name
	handleChange(e) {
		this.setState({ name: e.target.value });
		//alert(e.target.value);
		
 
    }
	//submit the data to spring boot api through axios
    handleSubmit(e) {
		//to prevent default action happen
         e.preventDefault();
	axios.post("http://localhost:8086/users", {userName:this.state.name})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
	
    render() {
		
	  return (
        <div>
			<button onClick={this.getUser}>GetAllUser</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			 <br /><br />
			 
			<table>
			 <tbody>
			 <tr> 
			 <th>Id &nbsp;&nbsp;&nbsp;</th>
			 <th>UserName</th>
			 </tr>
				{ this.state.users.map((user,i) => <tr key={'user_' + i}><td>{user.id} &nbsp;&nbsp;&nbsp;&nbsp;</td><td>{user.userName}</td></tr>)}
			 </tbody>
			</table>
			<br /><br />
			 
		  <form onSubmit={this.handleSubmit}>
             <label>
             UserName:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input type="text" name="name" onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             </label>
            <button type="submit">UpdateUser</button>
          </form>
		
       </div>
      );
   }
}
// exporting the App component to render it from main.js
export default App;